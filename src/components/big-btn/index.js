import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// import styles
import styles from './styles';

// return the big button component
const BigBtn = function BigBtn({ onPress, title }) {
  return (
    <TouchableOpacity
      style={styles.bigBtn}
      onPress={onPress}
    >
      <Text style={styles.bigBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};

BigBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default BigBtn;
