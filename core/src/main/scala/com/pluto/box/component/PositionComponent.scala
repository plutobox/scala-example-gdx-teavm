package com.pluto.box.component

import com.badlogic.ashley.core.Component

class PositionComponent extends Component {
  var x: Float = 0.0f
  var y: Float = 0.0f
  var z: Float = 0.0f // determines render order
}
