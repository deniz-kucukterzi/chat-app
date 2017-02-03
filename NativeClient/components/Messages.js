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
      <View style={styles.messages}>
        {this.props.messages.map((message, i) => {
          return <Text key={i}>{message.author}: {message.body}</Text>;
        })}
      </View>
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
