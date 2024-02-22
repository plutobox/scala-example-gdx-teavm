package com.pluto.box

import com.badlogic.ashley.core.Entity
import com.badlogic.gdx.graphics.glutils.ShapeRenderer
import com.badlogic.gdx.graphics.{Color, GL20}
import com.badlogic.gdx.{Game, Gdx}
import com.pluto.box.component.{CircleComponent, MouseXTrackingComponent, PositionComponent, RectangleComponent, RenderableComponent, VelocityComponent}
import com.pluto.box.system.{MouseXTrackingMovementSystem, MovementSystem, RenderingSystem}

class BreakoutGame extends Game {

  lazy val ashleyEngine = new com.badlogic.ashley.core.Engine()

  lazy val shapeRenderer: ShapeRenderer = new ShapeRenderer

  lazy val colors: Seq[Color] = Seq[Color](Color.YELLOW, Color.GREEN, Color.BLUE, Color.RED, Color.YELLOW, Color.GREEN, Color.BLUE)

  lazy val ball: Entity = {
    val positionComponent = new PositionComponent
    positionComponent.x = Gdx.graphics.getWidth / 2
    positionComponent.y = Gdx.graphics.getHeight / 2
    val circleComponent = new CircleComponent
    circleComponent.radius = 20
    val velocityComponent = new VelocityComponent
    velocityComponent.x = 3
    velocityComponent.y = 3
    new Entity()
      .add(positionComponent)
      .add(circleComponent)
      .add(velocityComponent)
      .add(new RenderableComponent)
  }

  lazy val paddle: Entity = {
    val positionComponent = new PositionComponent
    positionComponent.x = 0
    positionComponent.y = 20
    val rectangleComponent = new RectangleComponent
    rectangleComponent.width = 100
    rectangleComponent.height = 10
    new Entity()
      .add(positionComponent)
      .add(rectangleComponent)
      .add(new MouseXTrackingComponent)
      .add(new RenderableComponent)
  }

  lazy val blocks: Seq[Entity] = {
    val blockWidth = 63
    val blockHeight = 20
    (Gdx.graphics.getWidth / 2 to Gdx.graphics.getHeight by blockHeight + 10).zipWithIndex.flatMap({case (y: Int, colorIndex: Int) =>
      (0 to Gdx.graphics.getWidth by blockWidth + 10).map(x => {
        val positionComponent = new PositionComponent
        positionComponent.x = x
        positionComponent.y = y
        val rectangleComponent = new RectangleComponent
        rectangleComponent.width = blockWidth
        rectangleComponent.height = blockHeight
        rectangleComponent.color = colors(colorIndex)
        new Entity()
          .add(positionComponent)
          .add(rectangleComponent)
          .add(new RenderableComponent)
      })
    })
  }

  override def create(): Unit = {
    // add entities
//    ashleyEngine.addEntity(ball)
//    ashleyEngine.addEntity(paddle)
    blocks.foreach(println) // line should be blocks.foreach(ashleyEngine.addEntity)

    // add systems
//    ashleyEngine.addSystem(new MouseXTrackingMovementSystem)
//    ashleyEngine.addSystem(new MovementSystem)
//    ashleyEngine.addSystem(new RenderingSystem(shapeRenderer))
  }

  override def render(): Unit = {
    Gdx.gl.glClear(GL20.GL_COLOR_BUFFER_BIT)
    shapeRenderer.begin(ShapeRenderer.ShapeType.Filled)
//    ashleyEngine.update(Gdx.graphics.getDeltaTime)
    shapeRenderer.setColor(Color.BLUE)
    shapeRenderer.circle(50, 50, 50)
    shapeRenderer.end()
  }
}
