package com.pluto.box.system

import com.badlogic.ashley.core.{ComponentMapper, Entity, Family}
import com.badlogic.ashley.systems.IteratingSystem
import com.pluto.box.component.{PositionComponent, VelocityComponent}

class MovementSystem extends IteratingSystem(
  Family
    .all(classOf[PositionComponent], classOf[VelocityComponent])
    .get()
) {
  private val positionMapper: ComponentMapper[PositionComponent] = ComponentMapper.getFor(classOf[PositionComponent])
  private val velocityMapper: ComponentMapper[VelocityComponent] = ComponentMapper.getFor(classOf[VelocityComponent])

  override def processEntity(entity: Entity, deltaTime: Float): Unit = {
    val position = positionMapper.get(entity)
    val velocity = velocityMapper.get(entity)

    position.x += velocity.x * deltaTime
    position.y += velocity.y * deltaTime
  }
}
