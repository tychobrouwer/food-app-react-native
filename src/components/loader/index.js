import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';

const Loader = function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator
        color="grey"
        size="large"
      />
    </View>
  );
};

export default Loader;
