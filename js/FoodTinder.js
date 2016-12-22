import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native'

export default class FoodTinder extends Component {
  static defaultProps = {
    food: [
      {dish: 'Chicken', icon: '🍗'},
      {dish: 'Spaghetti', icon: '🍝'},
      {dish: 'Fish and Chips', icon: '🐟'},
      {dish: 'Pizza', icon: '🍕'},
      {dish: 'Chow Mein', icon: '🍜'},
      {dish: 'Burritos', icon: '🌯'},
      {dish: 'Octopus', icon: '🐙'},
      {dish: 'Tacos', icon: '🌮'},
      {dish: 'Sushi', icon: '🍣'},
      {dish: 'Hotdogs', icon: '🌭'}
    ]
  }

constructor (props) {
  super(props)
  this.state = {
    currentIndex: 0,
    leftOffset: new Animated.Value(57)
  }
  this.buttonClicked = this.buttonClicked.bind(this)
}

buttonClicked() {
      this.state.leftOffset.setValue(57)
      this.setState((prevState) => {
        const index = (prevState.currentIndex + 1 > this.props.food.length-1) ? 0 : prevState.currentIndex + 1
        return {
          currentIndex: index
        }
      })
  }

  render() {
    const currentFood = this.props.food[this.state.currentIndex]
    const nextFood = this.props.food[this.state.currentIndex + 1 > this.props.food.length-1 ? 0 : this.state.currentIndex + 1]
      return (
        <View
          style={{
            width: 375,
            alignItems: 'center',
          }}
        >
          <Animated.View
            style={{
              left: this.state.leftOffset,
              position: 'absolute',
              top: 0,
              width: 260,
              height: 260,
              marginTop: 40,
              borderRadius: 130,
              borderWidth: 9,
              borderColor: '#09B4FF',
              backgroundColor: '#C9E5FE',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 3
            }}
          >
            <Text
              style={{
                backgroundColor: 'transparent',
                fontSize: 150
              }}
            >
              {currentFood.icon}
            </Text>
          </Animated.View>
          <Animated.View
            style={{
              position: 'absolute',
              top: 0,
              left: 57,
              width: 260,
              height: 260,
              marginTop: 40,
              borderRadius: 130,
              borderWidth: 9,
              borderColor: '#09B4FF',
              backgroundColor: '#C9E5FE',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                backgroundColor: 'transparent',
                fontSize: 150
              }}
            >
              {nextFood.icon}
            </Text>
          </Animated.View>
          <View
            style={{
              marginTop: 40,
              height: 260,
            }}
          />
          <Text
            style={{
              fontSize: 30,
              marginTop: 20
            }}
          >
            {`${currentFood.dish}?`}
          </Text>
          <View
            style={{
              marginHorizontal: 58,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Animated.timing(
                  this.state.leftOffset,
                  { toValue: -320 }
                ).start((finished) => {
                  if (finished) {
                    this.buttonClicked()
                  }
                })
              }}
            >
              <Image
                source={require('../img/Cross.png')}
              />
            </TouchableOpacity>
            <View style={{
              flexGrow: 1
            }}/>
            <TouchableOpacity
              onPress={() => {
                Animated.timing(
                  this.state.leftOffset,
                  { toValue: 320 }
                ).start((finished) => {
                  if (finished) {
                    this.buttonClicked()
                  }
                })
              }}
            >
              <Image
                source={require('../img/Tick.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

      )

  }

}
