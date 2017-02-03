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
  TextInput,
  ScrollView,
  View
} from 'react-native';

import ChatWidget from './components/ChatWidget';
import Input from './components/Input';

export default class NativeClient extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: undefined
    };

    this.setAuthor = this.setAuthor.bind(this);
  }

  setAuthor(username) {
    this.setState({
      author: username
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.author && <Input handleSubmit={this.setAuthor} />}
        {this.state.author && <ChatWidget author={this.state.author} />}
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
