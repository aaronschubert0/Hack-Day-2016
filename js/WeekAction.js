import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Heart from './Heart'

function weekAction (pastPresentFuture, liveViewAction, infoViewAction) {
  switch (pastPresentFuture) {
    case 'live view':
      return (
        <TouchableOpacity
          onPress={liveViewAction}>
          <Image
            source={require('../img/camera.png')}
            style={{
              width: 30,
              height: 30
            }}
          />
        </TouchableOpacity>
      )
      break;
    case 'rate':
      return (
        <Heart />
      )
    case 'view':
      return (
        <Text
          onPress={infoViewAction}
          style={{
            fontSize: 12,
            color: '#09B4FF'
          }}
        >
          {'info'}
        </Text>
      )
    default:

  }
}

const WeekAction = ({ style, pastPresentFuture, liveViewAction, infoViewAction }) => {
  const labels = {
    present: 'live view',
    past: 'rate',
    future: 'view',
  };

  return (
    <View
      style={style}
    >
      {weekAction(labels[pastPresentFuture], liveViewAction, infoViewAction)}
    </View>
  )
}

export default WeekAction
