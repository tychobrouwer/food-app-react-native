import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import config from '../../config';

// import styles
import styles from './styles';
import PressableView from '../pressable-view';

// return the big button component
const BigBtn = function BigBtn({ onPress, title, style }) {
  return (
    <PressableView
      style={[styles.bigBtn, style]}
      onPress={onPress}
    >
      <Text style={styles.bigBtnText}>{title}</Text>
    </PressableView>
  );
};

BigBtn.propTypes = {
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

BigBtn.defaultProps = {
  style: {},
};

export default BigBtn;
