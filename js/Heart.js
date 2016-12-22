import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'

export default class Heart extends Component {
  constructor (props) {
    super (props)
    this.state = {
      selected: false
    }
  }

  render () {
    const image = this.state.selected ? require('../img/HeartFill.png') : require('../img/Heart.png')
    return (
      <TouchableOpacity
        onPress={() => this.setState({ selected: !this.state.selected })}
      >
        <Image
          source={image}
        />
      </TouchableOpacity>
    )
  }
}
