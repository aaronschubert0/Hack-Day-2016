import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, ScrollView, Dimensions } from 'react-native'
import Cam from './Cam'
import NavBar from './NavBar'
import WeekAction from './WeekAction'
import WeekView from './WeekView'
import FoodTinder from './FoodTinder'

export default class Root extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 0
    }
    this.data = [
      {
        "date": "2016-12-19",
        "dish": "Chicken",
        "icon": "🍗"
      },
      {
        "date": "2016-12-20",
        "dish": "Fish & Chips",
        "icon": "🐟"
      },
      {
        "date": "2016-12-21",
        "dish": "Spaghetti",
        "icon": "🍝"
      },
      {
        "date": "2016-12-22",
        "dish": "Pizza",
        "icon": "🍕"
      },
      {
        "date": "2016-12-23",
        "dish": "Chow Mein",
        "icon": "🍜"
      }
    ]
  }

  render () {
    return (
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}
      >
        <NavBar />
        <View
          style={{
            borderWidth: 1,
            borderRadius: 4,
            borderColor: '#80848F',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            height: 29,
            alignItems: 'center',
            paddingLeft: 5,
            paddingRight: 5,
            marginTop: 39
          }}
        >
          <Text
            style={{
              paddingHorizontal: 15,
              fontWeight: this.state.currentPage === 0 ? '600' : '400',
              color: this.state.currentPage === 0 ? '#09B4FF' :  'gray'
            }}
          >
            {'My Meals'}
          </Text>
          <View style={{ width: 1, height: 29, backgroundColor: '#80848F', marginHorizontal: 5}}/>
          <Text
            style={{
              paddingHorizontal: 15,
              fontWeight: this.state.currentPage === 1 ? '600' : '400',
              color: this.state.currentPage === 1 ? '#09B4FF' :  'gray'
            }}
          >
            {'This Week'}</Text>
        </View>
        <ScrollView
          horizontal={true}
          onScroll={(e) => {
            const page = e.nativeEvent.contentOffset.x / Dimensions.get('window').width
            if (page != this.state.currentPage) {
              this.setState({
                currentPage: page
              })
            }
          }}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          style={{
            width: 375,
          }}
        >
          <FoodTinder
          />
          <WeekView
            push={this.props.push}
            data={this.data}
            style={{
              marginTop: 20
            }}
          />
        </ScrollView>
      </View>
    )
  }
}
