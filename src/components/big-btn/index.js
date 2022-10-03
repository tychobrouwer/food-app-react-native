import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

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

const styleProp = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

BigBtn.propTypes = {
  style: PropTypes.oneOfType([
    styleProp,
    PropTypes.arrayOf(styleProp),
  ]),
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

BigBtn.defaultProps = {
  style: {},
};

export default BigBtn;
