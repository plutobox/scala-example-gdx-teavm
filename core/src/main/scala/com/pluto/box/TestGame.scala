package com.pluto.box

import com.badlogic.gdx.graphics.{GL20, Texture}
import com.badlogic.gdx.graphics.g2d.{BitmapFont, SpriteBatch}
import com.badlogic.gdx.{Game, Gdx}

class TestGame extends Game {
  lazy val image = new Texture(Gdx.files.internal("libgdxlogo.png")) // If this throws, run `sbt compile` and try again.
  lazy val batch = new SpriteBatch()
  lazy val font = new BitmapFont()

  override def create(): Unit = {}

  override def dispose(): Unit = {
    batch.dispose()
    font.dispose()
    image.dispose()
    super.dispose()
  }

  override def render(): Unit = {
    Gdx.gl.glClearColor(.25f, .25f, .25f, 1)
    Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT)
    batch.begin()
    batch.draw(image, 10, 10)
    font.draw(batch, "Hey there :)", Gdx.graphics.getWidth / 2, Gdx.graphics.getHeight / 2)
    batch.end()
  }
}
