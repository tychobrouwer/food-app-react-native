import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import config from '../../config';

import ChevronImage from '../../../assets/chevron-image';

// import styles
import styles from './styles';

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
  const [status, setStatus] = useState(false);

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
          animated={false}
          onDropdownWillShow={() => setStatus(true)}
          onDropdownWillHide={() => setStatus(false)}
        />
        <View style={styles.dropdownChevron}>
          <ChevronImage
            width={25}
            height={25}
            style={(status) ? { transform: [{ rotate: '180deg' }] } : {}}
          />
        </View>
      </View>
    </View>
  );
};

BigTextWithDropdown.propTypes = {
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
