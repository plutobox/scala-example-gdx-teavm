package com.pluto.box.system

import com.badlogic.ashley.core.{ComponentMapper, Entity, Family}
import com.badlogic.ashley.systems.IteratingSystem
import com.badlogic.gdx.Gdx
import com.pluto.box.component.{MouseXTrackingComponent, PositionComponent}

class MouseXTrackingMovementSystem extends IteratingSystem(
  Family
    .all(classOf[PositionComponent], classOf[MouseXTrackingComponent])
    .get()
) {
  private val positionMapper: ComponentMapper[PositionComponent] = ComponentMapper.getFor(classOf[PositionComponent])

  override def processEntity(entity: Entity, deltaTime: Float): Unit = {
    val position = positionMapper.get(entity)

    position.x = Gdx.input.getX()
  }
}
