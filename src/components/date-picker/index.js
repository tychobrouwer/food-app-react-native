import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';

import config from '../../config';

// import styles
import styles from './styles';
import formatDate from '../../utils/format-date';

// return the big text input with dropdown component
const DateSelector = function DateSelector(
  {
    style,
    date,
    onDateChange,
  },
) {
  const [visibility, setVisibility] = useState(false);

  Keyboard.addListener('keyboardWillShow', () => {
    setVisibility(false);
  });

  return (
    <View style={[styles.inputView, style]}>
      <TouchableOpacity
        style={styles.TextInputWrapper}
        onPress={() => {
          setVisibility(true);
          Keyboard.dismiss();
        }}
      >
        <Text style={styles.TextInput}>
          {formatDate(date)}
        </Text>
      </TouchableOpacity>
      {
        visibility
        && (
          <TouchableWithoutFeedback onPress={console.log('tets')}>
            <View style={styles.datePickerContainer}>
              <DatePicker
                style={styles.datePicker}
                mode="calendar"
                minimumDate={getFormatedDate(new Date(), 'YYYY/MM/DD')}
                selected={getFormatedDate(date, 'YYYY/MM/DD')}
                onDateChange={(selectedString) => {
                  setVisibility(false);
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
            </View>
          </TouchableWithoutFeedback>
        )
      }
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
