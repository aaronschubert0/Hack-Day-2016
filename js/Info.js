import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import NavBar from './NavBar'

const Info = ({ pop }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1
      }}
    >
      <NavBar pop={pop} showBack={true}/>
      <ScrollView
        contentContainerStyle={{
          backgroundColor: 'white',
          alignItems: 'center'
        }}
      >
        <Text style={{ marginVertical: 20 }}>{'🍕 Pizza'}</Text>
        <Text style={{ marginVertical: 20, fontWeight: '600', fontSize: 17 }}>{'Ingredients'}</Text>
        <Text style={{ marginVertical: 20 }}>{'PENNE PASTA'}</Text>
        <Text style={{ marginVertical: 20 }}>{'TOMATOES'}</Text>
        <Text style={{ marginVertical: 20 }}>{'BASIL'}</Text>
        <Text style={{ marginVertical: 20 }}>{'ONION'}</Text>
        <Text style={{ marginVertical: 20 }}>{'BEEF MINCE'}</Text>
        <Text style={{ marginVertical: 20 }}>{'PARMESAN'}</Text>
        <Text style={{ marginVertical: 20, fontWeight: '600', fontSize: 17 }}>{'NUTRITION (per 100g)'}</Text>
        <Text style={{ marginVertical: 20 }}>{'CALORIES: 158'}</Text>
        <Text style={{ marginVertical: 20 }}>{'Total Fat 0.9 g'}</Text>
        <Text style={{ marginVertical: 20 }}>{'Saturated fat 0.2 g'}</Text>
        <Text style={{ marginVertical: 20 }}>{'Sodium 1 mg	0%'}</Text>
        <Text style={{ marginVertical: 20 }}>{'Potassium 44 mg'}</Text>
        <Text style={{ marginVertical: 20 }}>{'Sugar 0.6 g'}</Text>
        <Text style={{ marginVertical: 20 }}>{'Protein 6 g'}</Text>
      </ScrollView>
    </View>
  )
}

export default Info
