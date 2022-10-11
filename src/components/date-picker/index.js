import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, Text, Keyboard, Animated,
} from 'react-native';
import DatePicker from 'tbrouwer-react-native-modern-datepicker';

import config from '../../config';

// import styles
import styles from './styles';
import { formatDate, formatDateAlt } from '../../utils/format-date';

// return the big text input with dropdown component
const DateSelector = function DateSelector(
  {
    style,
    date,
    onDateChange,
  },
) {
  const [visibility, setVisibility] = useState(false);
  const itemOpacity = useRef(new Animated.Value(0)).current;

  Keyboard.addListener('keyboardWillShow', () => {
    setVisibility(false);
  });

  const onAction = (show, callback) => {
    Animated.timing(itemOpacity, {
      toValue: show ? 1 : 0,
      duration: 100,
      useNativeDriver: false,
    }).start(callback);
  };

  return (
    <View style={[styles.inputView, style]}>
      <TouchableOpacity
        style={styles.TextInputWrapper}
        onPress={() => {
          setVisibility(true);
          onAction(true, () => {});
          Keyboard.dismiss();
        }}
      >
        <Text style={styles.TextInput}>
          {formatDate(date)}
        </Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.datePickerContainer,
          { opacity: itemOpacity },
          !visibility ? { zIndex: -10 } : {},
        ]}
      >
        <DatePicker
          style={styles.datePicker}
          mode="calendar"
          minimumDate={formatDateAlt(new Date())}
          selected={formatDateAlt(date)}
          onDateChange={(selectedString) => {
            onAction(false, () => setVisibility(false));
            onDateChange(selectedString);
          }}
          options={{
            mainColor: config.secondaryColor,
            textDefaultColor: config.primaryTextColor,
            textSecondaryColor: config.secondaryTextColor,
            selectedTextColor: config.tertiaryColor,
            textHeaderColor: config.primaryTextColor,
          }}
        />
      </Animated.View>
    </View>
  );
};

DateSelector.propTypes = {
  style: PropTypes.oneOfType([
    config.styleProp,
    PropTypes.arrayOf(config.styleProp),
  ]),
  date: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
};

DateSelector.defaultProps = {
  style: {},
};

export default DateSelector;
