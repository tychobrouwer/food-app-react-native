import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';

import config from '../../config';

// import styles
import styles from './styles';

// return the big text input component
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
        placeholderTextColor={config.secondaryTextColor}
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

BigTextInput.propTypes = {
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func,
};

BigTextInput.defaultProps = {
  style: {},
  autoComplete: undefined,
  secureTextEntry: false,
  keyboardType: 'default',
  onEndEditing: () => {},
};

export default BigTextInput;
