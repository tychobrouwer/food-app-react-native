import React from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

// import styles
import styles from './styles';
import config from '../../styles/config';

// return the big text input component
const BigTextWithDropdown = function BigTextWithDropdown(
  {
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
    <View style={styles.container}>
      <View style={{ width: '90%', flexDirection: 'row' }}>
        <View style={{ flexGrow: 1 }}>
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
          defaultValue="units"
          textStyle={[styles.dropdownText, {
            paddingLeft: 5, paddingRight: 5, paddingBottom: 12, paddingTop: 12,
          }]}
          dropdownTextStyle={styles.dropdownText}
          dropdownStyle={styles.dropdown}
          options={[
            'units',
            'grams',
            'milliliters',
          ]}
        />
      </View>
    </View>
  );
};

BigTextWithDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func,
};

BigTextWithDropdown.defaultProps = {
  autoComplete: undefined,
  secureTextEntry: false,
  keyboardType: 'default',
  onEndEditing: () => {},
};

export default BigTextWithDropdown;
