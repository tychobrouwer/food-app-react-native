import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// import images used
import BackArrowImage from '../../../assets/back-arrow-image';
import PressableView from '../pressable-view';

// import styles
import styles from './styles';

// return the big text input component
const TopNavigator = function TopNavigator({ navigation }) {
  return (
    <View style={styles.topNav}>
      <PressableView
        style={{ width: 35, height: 35 }}
        onPress={() => {
          navigation.pop();
        }}
      >
        <BackArrowImage style={styles.navLink} width={35} height={35} />
      </PressableView>
    </View>
  );
};

TopNavigator.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default TopNavigator;
