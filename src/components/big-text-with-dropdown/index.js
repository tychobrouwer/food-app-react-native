import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

// import styles
import styles from './styles';
import config from '../../styles/config';

// return the big text input with dropdown component
const BigTextWithDropdown = function BigTextWithDropdown(
  {
    style,
    value,
    placeholder,
    autoComplete,
    keyboardType,
    secureTextEntry,
    onChangeText,
    onEndEditing,
    options,
    defaultValue,
    onChangeOption,
  },
) {
  return (
    <View style={[styles.container, style]}>
      <View style={{ width: '90%', flexDirection: 'row' }}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
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
        <ModalDropdown
          style={styles.dropdownStyle}
          defaultValue={defaultValue}
          onSelect={onChangeOption}
          textStyle={[styles.dropdownText, styles.dropdownBtn]}
          dropdownTextStyle={styles.dropdownText}
          dropdownStyle={styles.dropdown}
          options={options}
        />
      </View>
    </View>
  );
};

const styleProp = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

BigTextWithDropdown.propTypes = {
  style: PropTypes.oneOfType([
    styleProp,
    PropTypes.arrayOf(styleProp),
  ]),
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeOption: PropTypes.func.isRequired,
};

BigTextWithDropdown.defaultProps = {
  style: {},
  autoComplete: undefined,
  secureTextEntry: false,
  keyboardType: 'default',
  onEndEditing: () => {},
};

export default BigTextWithDropdown;
