import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';

// import images used
import SettingsImage from '../../../assets/settings-image';
import RecipesImage from '../../../assets/recipes-image';
import ShoppingListImage from '../../../assets/shopping-list-image';
import HomeImage from '../../../assets/home-image';
import BackArrowImage from '../../../assets/back-arrow-image';
import PlusImage from '../../../assets/plus-image';

// import styles
import styles from './styles';

// return the home screen component
const HomeScreen = function HomeScreen() {
  return (
    <ScreenDefault>
      <View style={styles.topNav}>
        <TouchableOpacity>
          <BackArrowImage style={styles.navLink} width={35} height={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            CALENDAR
          </Text>
        </TouchableOpacity>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text>FOOD: chicken</Text>
            <Text>EXPIRATION DATE: 10/10/2022</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <View style={styles.bottomNavWrapper}>
          <TouchableOpacity style={styles.navItem}>
            <HomeImage style={styles.navLink} width={40} height={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <ShoppingListImage style={styles.navLink} width={40} height={40} />
          </TouchableOpacity>
          <View style={styles.navItem} />
          <TouchableOpacity style={styles.navItem}>
            <RecipesImage style={styles.navLink} width={40} height={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <SettingsImage style={styles.navLink} width={40} height={40} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.navItem, styles.bigNavItem]}>
            <PlusImage style={styles.navLink} width={90} height={90} />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenDefault>
  );
};

export default HomeScreen;
