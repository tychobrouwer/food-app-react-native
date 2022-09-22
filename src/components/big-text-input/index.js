import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import styles from './styles';

const BigTextInput = function BigTextInput(
  {
    style,
    value,
    placeholder,
    autoComplete,
    keyboardType,
    secureTextEntry,
    onChangeText,
    onEndEditing,
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
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

const styleProp = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

BigTextInput.propTypes = {
  style: PropTypes.oneOfType([
    styleProp,
    PropTypes.arrayOf(styleProp),
  ]),
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func,
};

BigTextInput.defaultProps = {
  style: {},
  secureTextEntry: false,
  keyboardType: 'default',
  onEndEditing: () => {},
};

export default BigTextInput;
