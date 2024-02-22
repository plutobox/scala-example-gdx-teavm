package com.pluto.box

import com.github.xpenatan.gdx.backends.teavm.{TeaApplication, TeaApplicationConfiguration}

object TeaVMLauncher {
  def main(args: Array[String]): Unit = {
    val config = new TeaApplicationConfiguration("canvas")
    // Setting these to 0 will fill all available space on web browser
    config.width = 0
    config.height = 0
    new TeaApplication(new BreakoutGame, config)
  }
}
