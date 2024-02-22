import com.earldouglas.xwp.ContainerPlugin.autoImport.containerArgs
import sbt.Keys._
import sbt._

object ProjectSettings {
  lazy val assetsDirectory = settingKey[File]("Directory with game's assets")

  val buildJavaScript = taskKey[Unit]("Transpile bytecode to JavaScript via TeaVM")
  lazy val jettyRun = taskKey[Unit]("Start Jetty Server for TeaVM JavaScript")

  lazy val root = commonSettings
  lazy val core = commonSettings ++ Dependencies.core
  lazy val desktop = commonSettings ++ Dependencies.desktop
  lazy val teavm = commonSettings ++ Dependencies.teavm ++ Seq(
    (thisProject / compile / buildJavaScript) := (thisProject / compile / runner).value.run(
      mainClass = "com.pluto.box.TeaVMBuilder",
      classpath = (Runtime / fullClasspath).value.files,
      options = Array(""),
      log = streams.value.log
    ),
    containerArgs := Seq("--path", "/", "teavm/build/dist/webapp"),
  )

  private lazy val general = Seq(
    version := version.value,
    scalaVersion := Versions.scala,
    organization := "com.pluto.box",
    scalacOptions ++= Seq("-unchecked", "-deprecation", "-feature", "-Xlint"),
    assetsDirectory := {
      val r = file("assets")
      IO.createDirectory(r)
      r
    },
    run / baseDirectory := assetsDirectory.value,
    Compile / unmanagedResourceDirectories += assetsDirectory.value,
    fork := true, // Pretty sure you need this
    javaOptions ++= Seq(
      "-XstartOnFirstThread",
      "-Dorg.eclipse.jetty.LEVEL=DEBUG" // Control jetty logging
    ),
    resolvers ++= Seq(
      "jitpack" at "https://jitpack.io",
      "teavm" at "https://teavm.org/maven/repository/",
    ),
    cancelable in Global := true // allow to use Ctrl + C in sbt prompt
  )

  private lazy val commonSettings = general
}
