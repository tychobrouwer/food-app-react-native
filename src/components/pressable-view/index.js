import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Animated, Pressable } from 'react-native';

import config from '../../config';

// import styles
// import styles from './styles';

// return the big text input component
const PressableView = function PressableView({ children, style, onPress }) {
  const opacity = useRef(new Animated.Value(1)).current;

  const animate = (active) => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(opacity, {
      toValue: active ? 0.5 : 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View style={[style, { opacity }]}>
      <Pressable
        style={{
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={onPress}
        onPressIn={() => animate(true)}
        onPressOut={() => animate(false)}
      >
        { children }
      </Pressable>
    </Animated.View>
  );
};

PressableView.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
};

PressableView.defaultProps = {
  style: {},
};

export default PressableView;
