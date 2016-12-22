import React from 'react'
import { View, Text } from 'react-native'
import WeekAction from './WeekAction'
import moment from 'moment'
import Cam from './Cam'
import Info from './Info'

const WeekView = ({ data, push }) => {
  return (
    <View
      style={{
        marginTop: 20
      }}
    >
      {data.map(({ date, dish, icon }, index) => {
        const pastPresentFuture = moment().isSame(date, 'day')
        ? 'present'
        : moment().isBefore(date, 'day')
            ? 'future'
            : 'past'

        return (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              padding: 10,
              paddingVertical: 20,
              paddingHorizontal: 16,
              alignItems: 'center',
              backgroundColor: pastPresentFuture === 'present' ? '#ECF6FF' : 'white'
            }}
          >
            <Text
              style={{
                width: 70,
                fontSize: 18,
                marginRight: 15
              }}
            >
              {moment(date).format('ddd').toUpperCase()}
            </Text>
              <Text
                style={{
                  width: 19,
                  marginRight: 15,
                  fontSize: 18,
                }}
              >
                {icon}
              </Text>
              <Text
                style={{
                  width: 170,
                  fontSize: 18,
                }}
              >
                {dish}
              </Text>
            <WeekAction
              infoViewAction={() => push(
                Info,
                {},
                'info'
              )}
              liveViewAction={() => push(
                Cam,
                {},
                'cam'
              )}
              style={{
                width: 70
              }}
              pastPresentFuture={pastPresentFuture}
            />
          </View>
        )
      })}
    </View>
  )
}

export default WeekView
