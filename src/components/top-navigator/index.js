import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

// import images used
import BackArrowImage from '../../../assets/back-arrow-image';

// import styles
import styles from './styles';

// return the big text input component
const TopNavigator = function TopNavigator({ navigation }) {
  return (
    <View style={styles.topNav}>
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}
      >
        <BackArrowImage style={styles.navLink} width={35} height={35} />
      </TouchableOpacity>
    </View>
  );
};

TopNavigator.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default TopNavigator;
