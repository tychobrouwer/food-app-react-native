import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

export default class BigBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
      <TouchableOpacity
        style={styles.bigBtn}
        onPress={this.props.onPress}
      >
        <Text>{this.props.title}</Text> 
      </TouchableOpacity>
    );
  }
}
