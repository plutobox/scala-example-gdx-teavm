/**
 * -------------------------------------------------------------------------------------------------------------------
 * Root Project
 * -------------------------------------------------------------------------------------------------------------------
 **/

lazy val root = (project in file("."))
  .settings(
    name := "scala-example-gdx-teavm"
  )
  .settings(ProjectSettings.root: _*)
  .aggregate(core, desktop, teavm)

/**
 * -------------------------------------------------------------------------------------------------------------------
 * Modules
 * -------------------------------------------------------------------------------------------------------------------
 **/

lazy val core = (project in file("core"))
  .withId("core")
  .settings(
    name := "scala-example-gdx-teavm-core"
  )
  .settings(ProjectSettings.core: _*)

lazy val desktop = (project in file("desktop"))
  .withId("desktop")
  .settings(
    name := "scala-example-gdx-teavm-desktop"
  )
  .settings(ProjectSettings.desktop: _*)
  .dependsOn(core % Dependencies.classDependencyCompileTest)

lazy val teavm = (project in file("teavm"))
  .withId("teavm")
  .enablePlugins(JettyPlugin)
  .settings(
    name := "scala-example-gdx-teavm-teavm",
  )
  .settings(ProjectSettings.teavm: _*)
  .dependsOn(core % Dependencies.classDependencyCompileTest)

