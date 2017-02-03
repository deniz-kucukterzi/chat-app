/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ChatWidget from './components/ChatWidget';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class NativeClient extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ChatWidget />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('NativeClient', () => NativeClient);
