package com.pluto.box

import com.github.xpenatan.gdx.backends.teavm.{TeaApplication, TeaApplicationConfiguration}

object TeaVMLauncher {
  def main(args: Array[String]): Unit = {
    val config = new TeaApplicationConfiguration("canvas")

    // setting these to 0 makes it use entire canvas
    config.height = 0
    config.width = 0

    new TeaApplication(new TestGame, config)
  }
}
