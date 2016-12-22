/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NavigationExperimental,
} from 'react-native';
import Cam from './js/Cam'
import Root from './js/Root'
const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental

export default class appetite extends Component {
  constructor (props) {
    super(props)
    this.onNavigationChange = this._onNavigationChange.bind(this)
    this.state = {
      navigationState: {
        index: 0,
        routes: [{ key: 'root', component: Root }]
      },
      isDeveloper: false
    }
  }

  _onNavigationChange(type, component, props, key) {
    let { navigationState } = this.state

    switch (type) {
      case 'push':
        const { routes } = navigationState
        const keys = routes.map((item) => item.key)
        if (keys.indexOf(key) !== -1) return

        const route = {component, props, key}
        navigationState = NavigationStateUtils.push(navigationState, route)
        break;
      case 'pop':
        navigationState = NavigationStateUtils.pop(navigationState)
        break;
    }

    if (this.state.navigationState !== navigationState) {
      this.setState({ navigationState })
    }
  }

  render() {
    return (
      <NavigationCardStack
        onNavigateBack={() => this.onNavigationChange('pop', undefined, undefined)}
        navigationState={this.state.navigationState}
        renderScene={this._renderScene.bind(this)}
        enableGestures={false}
        style={{ flex: 1, backgroundColor: 'white' }}
      />
    )
  }

  _renderScene(sceneProps) {
    const { scene } = sceneProps
    const { component: Component, props } = scene.route
    const navigationActions = {
      push: (component, props, key) => this.onNavigationChange('push', component, props, key),
      pop: () => this.onNavigationChange('pop'),
    }
    return <Component {...props} {...navigationActions} />
  }
}




AppRegistry.registerComponent('appetite', () => appetite);
