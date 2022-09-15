import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { stylesMain } from '../../styles';

export default class BigBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <TouchableOpacity
        style={stylesMain.bigBtn}
        onPress={this.props.onPress}
      >
        <Text>{this.props.title}</Text> 
      </TouchableOpacity>
    );
  }
}
