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
      <View style={this.props.style}>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          style={styles.textInput}
          returnKeyType={"send"}
          onSubmitEditing={this.handleSubmit}
        />
        <Button
          title={this.props.submitText}
          onPress={this.handleSubmit}
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 0.8,
    backgroundColor: 'white',
    padding: 5,
  },
  button: {
    flex: 0.2
  }
});
