import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const NavBar = ({ push, pop, showBack = false }) => {
  return (
    <View
      style={{
        backgroundColor: '#94C6FF',
        alignSelf: 'stretch',
        height: 74,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <TouchableOpacity
        onPress={() => pop()}
      >
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            marginLeft: 16,
            opacity: showBack ? 1 : 0
          }}
        >
          {'Back'}
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 30,
          color: 'white'
        }}
      >
        {'appetite'}
      </Text>
      <Text style={{ opacity: 0, marginRight: 16 }}>{'Back'}</Text>
    </View>
  )
}

export default NavBar
