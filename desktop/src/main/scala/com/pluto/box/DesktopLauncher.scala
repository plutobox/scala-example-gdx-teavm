package com.pluto.box

import com.badlogic.gdx.backends.lwjgl3.{Lwjgl3Application, Lwjgl3ApplicationConfiguration}

object DesktopLauncher extends App {
  val config = new Lwjgl3ApplicationConfiguration
  config.setWindowSizeLimits(800, 800, 1000, 1000)
  new Lwjgl3Application(new TestGame, config)
}
