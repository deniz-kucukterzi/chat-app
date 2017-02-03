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
        <Messages messages={messages} />
        <Input handleSubmitMessage={broadcastMessage} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
