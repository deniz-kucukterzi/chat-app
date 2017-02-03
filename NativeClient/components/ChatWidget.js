import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Messages from './Messages';
import Input from './Input';

const messages = [
  { author: "Deniz", body: "Hello World" },
  { author: "Stuart", body: "It works!" },
  { author: "Deniz", body: "Shut up, cunt" },
];

const broadcastMessage = (message) => {
  messages.push({ author: "You", body: message });
};

export default class ChatWidget extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Chat App</Text>
        <Messages messages={messages} />
        <Input handleSubmitMessage={broadcastMessage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 60,
    padding: 25,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'steelblue',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
