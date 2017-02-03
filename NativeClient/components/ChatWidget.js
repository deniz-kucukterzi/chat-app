import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Messages from './Messages';
import Input from './Input';

const io = require('socket.io-client');

const messages = [
  { author: "Deniz", body: "Hello World" },
  { author: "Stuart", body: "It works!" },
];

export default class ChatWidget extends Component {

  constructor(props) {
    super(props);
    this.state = {
        status: 'disconnected',
        messages: messages
    }

    this.connect = this.connect.bind(this);
    this.disconnect = this.disconnect.bind(this);
    this.emit = this.emit.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.receiveMessage = this.receiveMessage.bind(this);
  }

  componentWillMount() {
    this.socket = io('https://f27b4f3b.ngrok.io');

    this.socket.on('connect', this.connect);
    this.socket.on('disconnect', this.disconnect);
    this.socket.on('sendMessage', this.sendMessage);
    this.socket.on('receiveMessage', this.receiveMessage);
  }

  emit(eventName, payload) {
    this.socket.emit(eventName, payload);
  }

  connect() {
    //this.emit('join', { name: 'Deniz' });
    this.setState({
      status: 'connected',
      messages: this.state.messages
    });
  }

  disconnect() {
    this.setState({
      status: 'disconnected',
      messages: this.state.messages
    });
  }

  sendMessage(message) {
    this.emit('sendMessage', { author: this.props.author, body: message});
  }

  receiveMessage(message) {
    this.state.messages.push(message);
    this.setState({
      status: this.state.status,
      messages: this.state.messages
    });
  }


  render() {
    var statusString = (this.state.status === 'disconnected') ? '(Disconnected)' : '';

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Chat App {statusString}</Text>
        <Messages messages={this.state.messages} />
        <Input style={styles.input} handleSubmit={this.sendMessage} submitText='Go' />
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
  },
  input: {
    height: 70,
    padding: 15,
    backgroundColor: 'skyblue',
    flexDirection: 'row'
  },
});
