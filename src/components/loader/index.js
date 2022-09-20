import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

const Loader = function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator
        color="#c98fe9"
        size="large"
      />
    </View>
  );
};

export default Loader;
