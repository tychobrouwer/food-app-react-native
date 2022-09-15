import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';

export default class BigTextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <View style={[styles.inputView, this.props.style]}>
        <TextInput
          style={styles.TextInput}
          placeholder={this.props.placeholder}
          placeholderTextColor='grey'
          autoComplete={this.props.autoComplete}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.secureTextEntry}
          importantForAutofill='yes'
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />
      </View>
    );
  }
}
