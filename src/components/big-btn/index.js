import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import config from '../../config';

// import styles
import styles from './styles';

// return the big button component
const BigBtn = function BigBtn({ onPress, title, style }) {
  return (
    <TouchableOpacity
      style={[styles.bigBtn, style]}
      onPress={onPress}
    >
      <Text style={styles.bigBtnText}>{title}</Text>
    </TouchableOpacity>
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
