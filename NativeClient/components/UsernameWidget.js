import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import Input from './Input';

export default class UsernameWidget extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select your username</Text>
        <Input style={styles.input} handleSubmit={this.props.setAuthor} submitText='Ok' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    paddingTop: 200,
    padding: 25,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'steelblue',
    flex: 1,
  },
  input: {
    flex: 3,
    padding: 25,
    backgroundColor: 'powderblue',
    flexDirection: 'row'
  },
});
