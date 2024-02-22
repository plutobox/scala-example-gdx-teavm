package com.pluto.box.system

import com.badlogic.ashley.core.{ComponentMapper, Entity, Family}
import com.badlogic.ashley.systems.SortedIteratingSystem
import com.badlogic.gdx.graphics.glutils.ShapeRenderer
import com.pluto.box.component.{CircleComponent, PositionComponent, RectangleComponent, RenderableComponent}
import com.pluto.box.util.ZComparator

class RenderingSystem(shapeRenderer: ShapeRenderer) extends SortedIteratingSystem(
  Family
    .all(classOf[PositionComponent], classOf[RenderableComponent])
    .one(classOf[CircleComponent], classOf[RectangleComponent])
    .get(),
  ZComparator
) {
  private val positionMapper: ComponentMapper[PositionComponent] = ComponentMapper.getFor(classOf[PositionComponent])
  private val circleMapper: ComponentMapper[CircleComponent] = ComponentMapper.getFor(classOf[CircleComponent])
  private val rectangleMapper: ComponentMapper[RectangleComponent] = ComponentMapper.getFor(classOf[RectangleComponent])

  override def processEntity(entity: Entity, deltaTime: Float): Unit = {
    val position = positionMapper.get(entity)
    val circleOpt = Option(circleMapper.get(entity))
    val rectangleOpt = Option(rectangleMapper.get(entity))

    circleOpt.foreach(circle => {
      shapeRenderer.setColor(circle.color)
      shapeRenderer.circle(position.x, position.y, circle.radius)
    })

    rectangleOpt.foreach(rectangle => {
      shapeRenderer.setColor(rectangle.color)
      shapeRenderer.rect(position.x, position.y, rectangle.width, rectangle.height)
    })
  }
}
