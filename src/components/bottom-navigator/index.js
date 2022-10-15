import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

// import images used
import SettingsImage from '../../../assets/settings-image';
import RecipesImage from '../../../assets/recipes-image';
import GroceryListImage from '../../../assets/grocery-list-image';
import HomeImage from '../../../assets/home-image';
import AddProductImage from '../../../assets/add-product-image';

// import styles
import styles from './styles';

// return the big text input component
const BottomNavigator = function BottomNavigator({ navigation }) {
  return (
    <View style={styles.bottomNav}>
      <View style={styles.bottomNavWrapper}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.push('Home');
          }}
        >
          <HomeImage style={styles.navLink} width={40} height={40} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.push('GroceryList');
          }}
        >
          <GroceryListImage style={styles.navLink} width={40} height={40} />
        </TouchableOpacity>
        <View style={styles.navItem}>
          <AddProductImage onPress={() => navigation.push('AddProduct')} style={styles.navLink} width={90} height={90} />
        </View>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.push('Recipes');
          }}
        >
          <RecipesImage style={styles.navLink} width={40} height={40} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.push('Settings');
          }}
        >
          <SettingsImage style={styles.navLink} width={40} height={40} />
        </TouchableOpacity>
        {/* <View style={[styles.navItem, styles.bigNavItem]}>
          <AddProductImage
            style={[styles.navLink, { marginTop: 'auto' }]}
            width="100%"
            height="100%"
            onPress={() => {
              navigation.push('AddProduct');
            }}
          />
        </View> */}
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
