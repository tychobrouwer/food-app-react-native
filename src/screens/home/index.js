import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';

// import styles
import styles from './styles';

// return the home screen component
const HomeScreen = function HomeScreen({ navigation }) {
  return (
    <ScreenDefault>
      <TopNavigator navigation={navigation} />
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
