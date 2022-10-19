import React from 'react';
import {
  View, Text, TouchableOpacity,
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
const RecipesScreen = function RecipesScreen({ navigation }) {
  return (
    <ScreenDefault scrollEnabled>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>

        <TouchableOpacity onPress={() => {
          navigation.push('RecipeSuggested');
        }}
        >
          <View style={styles.buttonRecipes}>
            <Text style={styles.buttonText}> Susggestions</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.push('RecipeMyMeals');
        }}
        >
          <View style={styles.buttonRecipes}>
            <Text style={styles.buttonText}> My Meals</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.push('RecipeSearch');
        }}
        >
          <View style={styles.buttonRecipes}>
            <Text style={styles.buttonText}> Search</Text>
          </View>
        </TouchableOpacity>

      </View>
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

RecipesScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default RecipesScreen;
