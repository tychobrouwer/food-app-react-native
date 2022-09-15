import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { styles } from './styles';

export default class Loader extends Component {
  render() { 
    return (
      <View style={styles.loader}>
        <ActivityIndicator
          color='grey'
          size='large'
        />
      </View>
    );
  }
}
