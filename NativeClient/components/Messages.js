import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Messages extends Component {

  render() {

    return (
      <KeyboardAwareScrollView style={styles.messages}>
        {this.props.messages.map((message, i) => {
          return <Text key={i}>{message.author}: {message.body}</Text>;
        })}
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  messages: {
    flex: 1,
    backgroundColor: 'powderblue',
    padding: 15
  }
});
