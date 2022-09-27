import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';

// import styles
import styles from './styles';

// return the home screen component
const GroceryListScreen = function GroceryListScreen({ navigation }) {
  return (
    <ScreenDefault>
      <TopNavigator navigation={navigation} />
      <View style={styles.content}>
        {/* CONTENT */}
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
