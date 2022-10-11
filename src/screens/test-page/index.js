import React, { useState } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import DatePicker from 'tbrouwer-react-native-modern-datepicker';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';

import formatDate from '../../utils/format-date';

// import styles
import styles from './styles';
import stylesMain from '../../styles';
import config from '../../config';

// return the home screen component
const GroceryListScreen = function GroceryListScreen({ navigation }) {
  const [date, setDate] = useState(new Date());

  return (
    <ScreenDefault scrollEnabled>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <DatePicker
          style={styles.datePicker}
          minimumDate={formatDate(new Date())}
          selected={formatDate(date)}
          onDateChange={(selectedString) => {
            setDate(selectedString);
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
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

GroceryListScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default GroceryListScreen;
