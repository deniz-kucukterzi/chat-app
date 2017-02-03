import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

export default class Messages extends Component {

  render() {

    return (
      <ScrollView style={styles.messages}>
        {this.props.messages.map((message, i) => {
          return <Text key={i}>{message.author}: {message.body}</Text>;
        })}
      </ScrollView>
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
