import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';

// import styles
import styles from './styles';

// return the home screen component
const GroceryListScreen = function GroceryListScreen({ navigation }) {
  return (
    <ScreenDefault>
      <View />
    </ScreenDefault>
  );
};

GroceryListScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default GroceryListScreen;
