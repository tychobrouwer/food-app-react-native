import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const BigTextInput = function BigTextInput(
  {
    style, placeholder, autoComplete, keyboardType, secureTextEntry, onChangeText, value,
  },
) {
  return (
    <View style={[styles.inputView, style]}>
      <TextInput
        style={styles.TextInput}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="grey"
        autoComplete={autoComplete}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        importantForAutofill="yes"
        onChangeText={onChangeText}
      />
    </View>
  );
};

BigTextInput.propTypes = {
  style: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
};

BigTextInput.defaultProps = {
  style: {},
  secureTextEntry: false,
  keyboardType: 'default',
};

export default BigTextInput;
