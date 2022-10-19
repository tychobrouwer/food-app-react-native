import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Keyboard, Animated,
} from 'react-native';
import DatePicker from 'tbrouwer-react-native-modern-datepicker';

import config from '../../config';

import PressableView from '../pressable-view';

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

  const onAction = (toShow, callback) => {
    Animated.sequence([
      Animated.delay(toShow ? 2 : 0),
      Animated.timing(itemOpacity, {
        toValue: toShow ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }),
    ]).start(callback);
  };

  return (
    <View style={[styles.inputView, style]}>
      <PressableView
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
      </PressableView>
      <Animated.View
        style={[
          styles.datePickerContainer,
          { opacity: itemOpacity },
          !visibility ? { zIndex: -10 } : {},
        ]}
      >
        { visibility && (
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

        )}
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
