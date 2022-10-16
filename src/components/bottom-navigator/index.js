import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// import images used
import SettingsImage from '../../../assets/settings-image';
import RecipesImage from '../../../assets/recipes-image';
import GroceryListImage from '../../../assets/grocery-list-image';
import HomeImage from '../../../assets/home-image';
import AddProductImage from '../../../assets/add-product-image';
import PressableView from '../pressable-view';

// import styles
import styles from './styles';

// return the big text input component
const BottomNavigator = function BottomNavigator({ navigation }) {
  return (
    <View style={styles.bottomNav}>
      <View style={styles.bottomNavWrapper}>
        <PressableView
          style={styles.navItem}
          onPress={() => {
            navigation.push('Home');
          }}
        >
          <HomeImage style={styles.navLink} width={40} height={40} />
        </PressableView>
        <PressableView
          style={styles.navItem}
          onPress={() => {
            navigation.push('GroceryList');
          }}
        >
          <GroceryListImage style={styles.navLink} width={40} height={40} />
        </PressableView>
        <View style={styles.navItem}>
          <AddProductImage onPress={() => navigation.push('AddProduct')} style={styles.navLink} width={90} height={90} />
        </View>
        <PressableView
          style={styles.navItem}
          onPress={() => {
            navigation.push('Recipes');
          }}
        >
          <RecipesImage style={styles.navLink} width={40} height={40} />
        </PressableView>
        <PressableView
          style={styles.navItem}
          onPress={() => {
            navigation.push('Settings');
          }}
        >
          <SettingsImage style={styles.navLink} width={40} height={40} />
        </PressableView>
      </View>
    </View>
  );
};

BottomNavigator.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default BottomNavigator;
