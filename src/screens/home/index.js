import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import FoodListItem from '../../components/food-list-item';

// import styles
import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const HomeScreen = function HomeScreen({ navigation }) {
  return (
    <ScreenDefault>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <TouchableOpacity style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            CALENDAR
          </Text>
        </TouchableOpacity>
        <FoodListItem food="flour" date={new Date(2022, 10, 17)} quantity={100} quantityType="grams" />
        <FoodListItem food="pears" date={new Date(2022, 10, 5)} quantity={4} quantityType="" />
        <FoodListItem food="orange juice" date={new Date(2022, 10, 1)} quantity={400} quantityType="milliliter" />
        <FoodListItem food="strawberries" date={new Date(2022, 9, 17)} quantity={2} quantityType="" />
      </View>
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
