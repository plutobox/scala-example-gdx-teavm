package com.pluto.box

import com.github.xpenatan.gdx.backends.teavm.{TeaApplication, TeaApplicationConfiguration}

object TeaVMLauncher {
  def main(args: Array[String]): Unit = {
    val config = new TeaApplicationConfiguration("canvas")
    new TeaApplication(new TestGame, config)
  }
}
