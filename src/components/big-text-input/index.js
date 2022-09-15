import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import { stylesMain } from '../../styles';

export default class BigTextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <View style={[stylesMain.inputView, this.props.style]}>
        <TextInput
          style={stylesMain.TextInput}
          placeholder={this.props.placeholder}
          placeholderTextColor='grey'
          autoComplete={this.props.autoComplete}
          keyboardType={this.props.keyboardType}
          secureTextEntry={this.props.secureTextEntry}
          importantForAutofill='yes'
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}
