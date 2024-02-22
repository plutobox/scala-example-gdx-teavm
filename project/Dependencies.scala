import sbt.Keys._
import sbt._

object Dependencies {

  lazy val classDependencyCompile = "compile->compile"
  lazy val classDependencyTest = "test->test"
  lazy val classDependencyCompileTest = "test->test;compile->compile"

  lazy val gdxBackendLwjgl3 = "com.badlogicgames.gdx" % "gdx-backend-lwjgl3" % Versions.libgdxVersion

  lazy val gdxPlatform = "com.badlogicgames.gdx" % "gdx-platform" % Versions.libgdxVersion
  lazy val gdxPlatformNativesDesktop = "com.badlogicgames.gdx" % "gdx-platform" % Versions.libgdxVersion classifier "natives-desktop"
  lazy val gdxFreetype = "com.badlogicgames.gdx" % "gdx-freetype" % Versions.libgdxVersion
  lazy val gdxFreetypePlatform = "com.badlogicgames.gdx" % "gdx-freetype-platform" % Versions.libgdxVersion
  lazy val gdxFreetypePlatformNativesDesktop = "com.badlogicgames.gdx" % "gdx-freetype-platform" % Versions.libgdxVersion classifier "natives-desktop"
  lazy val slf4j = "org.slf4j" % "slf4j-log4j12" % "2.0.5"

  lazy val teaVMTooling ="org.teavm" % "teavm-tooling" % Versions.teaVMVersion
  lazy val teaVMCore ="org.teavm" % "teavm-core" % Versions.teaVMVersion
  lazy val teaVMClasslib ="org.teavm" % "teavm-classlib" % Versions.teaVMVersion
  lazy val teaVMJso ="org.teavm" % "teavm-jso" % Versions.teaVMVersion
  lazy val teaVMJsoApis ="org.teavm" % "teavm-jso-apis" % Versions.teaVMVersion
  lazy val teaVMJsoImpl ="org.teavm" % "teavm-jso-impl" % Versions.teaVMVersion
  lazy val gdxTeaVM = "com.github.xpenatan.gdx-teavm" % "backend-teavm" % Versions.gdxTeaVMVersion
  lazy val gdxFreetypeTeaVM = "com.github.xpenatan.gdx-teavm" % "gdx-freetype-teavm" % Versions.gdxTeaVMVersion

  lazy val core = depends(
    slf4j,
    gdxPlatform,
    gdxFreetype,
    gdxFreetypePlatform,
  )

  lazy val desktop = depends(
    gdxBackendLwjgl3,
    gdxFreetypePlatformNativesDesktop,
    gdxPlatformNativesDesktop
  )

  lazy val teavm = depends(
    teaVMTooling,
    teaVMCore,
    teaVMClasslib,
    teaVMJso,
    teaVMJsoApis,
    teaVMJsoImpl,
    gdxTeaVM,
    gdxFreetypeTeaVM,
  )

  private def depends(modules: ModuleID*): Seq[Def.Setting[Seq[ModuleID]]] = Seq(libraryDependencies ++= modules)
}