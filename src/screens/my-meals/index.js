import React from 'react';
import {
<<<<<<< HEAD:src/screens/my-meals/index.js
  View, Text,
=======
  View, Text, TouchableOpacity,
>>>>>>> d0a9d6dd864dec1f9dd535ac8ca6b3756375bda0:src/screens/myMeals/index.js
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';

// import styles
import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const RecipesMyMealsScreen = function RecipesMyMealsScreen({ navigation }) {
  return (
    <ScreenDefault scrollEnabled>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            MY MEALS
          </Text>
        </View>
      </View>
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

RecipesMyMealsScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default RecipesMyMealsScreen;
