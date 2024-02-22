package com.pluto.box.util

import com.badlogic.ashley.core.{ComponentMapper, Entity}
import com.pluto.box.component.PositionComponent

import java.util.Comparator

object ZComparator extends Comparator[Entity] {
  private val positionComponent: ComponentMapper[PositionComponent] = ComponentMapper.getFor(classOf[PositionComponent])

  override def compare(o1: Entity, o2: Entity): Int = {
    Math.signum(positionComponent.get(o1).z - positionComponent.get(o2).z).toInt
  }
}
