import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Button,
  View
} from 'react-native';

export default class Input extends Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.props.handleSubmit(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <View style={styles.input}>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          style={styles.textInput}
        />
        <Button
          title='Send'
          onPress={this.handleSubmit}
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 70,
    padding: 15,
    backgroundColor: 'skyblue',
    flexDirection: 'row'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 0.8
  },
  button: {
    flex: 0.2
  }
});
