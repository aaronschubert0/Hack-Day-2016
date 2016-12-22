import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import Video from 'react-native-video'
export default class Cam extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videoLoaded: true
    }
  }
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
      }}>
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
            onPress={() => this.props.pop()}
          >
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                marginLeft: 16
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
        <Text
          style={{
            paddingVertical: 30,
            fontSize: 18
          }}
        >
          {'SPAGHETTI CAM'}
        </Text>
        {this.state.videoLoaded && (
          <Video
            source={require('../spaghetti.mp4')} // Looks for .mp4 file (background.mp4) in the given expansion version.
            rate={1.0}                   // 0 is paused, 1 is normal.
            volume={1.0}                 // 0 is muted, 1 is normal.
            muted={true}                // Mutes the audio entirely.
            paused={false}               // Pauses playback entirely.
            resizeMode="cover"           // Fill the whole screen at aspect ratio.
            repeat={true}                // Repeat forever.
            onLoad={() => this.setState({ videoLoaded: true})}    // Callback when video loads
            style={{
            borderColor: '#94C6FF',
            borderWidth: 4,
            borderRadius: 10,
            width: 334,
            height: 334
            }}
          />
        )}
        <View
          style={{
            position: 'absolute',
            top: 165,
            right: 31,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5,
            alignSelf: 'center'
          }}
        >
          <Text
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              fontWeight: '600'
            }}
          >
            {'LIVE'}
          </Text>
          <Image
            source={require('../img/camera.png')}
            style={{
              marginLeft: 10,
              width: 30,
              height: 30
            }}
          />
        </View>
        <View>
          <Video
            key="Reactions"
            source={require('../reactions.mp4')} // Looks for .mp4 file (background.mp4) in the given expansion version.
            rate={1.0}                   // 0 is paused, 1 is normal.
            volume={1.0}                 // 0 is muted, 1 is normal.
            muted={true}                // Mutes the audio entirely.
            paused={false}               // Pauses playback entirely.
            resizeMode="contain"           // Fill the whole screen at aspect ratio.
            repeat={true}                // Repeat forever.
            style={{
              width: 375,
              height: 117
            }}
          />
        </View>
        <Image
          source={require('../img/comment.png')}
          style={{
            alignSelf: 'flex-start',
            top: -15,
            width: 150,
            height: 48
          }}
        />
      </View>
    );
  }
}
