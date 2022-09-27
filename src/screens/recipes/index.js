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
const RecipesScreen = function RecipesScreen({ navigation }) {
  return (
    <ScreenDefault>
      <View />
    </ScreenDefault>
  );
};

RecipesScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default RecipesScreen;
