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
import styles from '../../styles';
import stylesMain from '../../styles';

// return the home screen component
const SettingsScreen = function SettingsScreen({ navigation }) {
  return (
    <ScreenDefault>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <TouchableOpacity style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            USER PROFILE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            ACCOUNT SETTINGS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentHeader} 
            onPress={() => {
            navigation.push('Home');
          }}>
          <Text style={styles.contentHeaderText}>
            PRIVACY POLICY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            TEST
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            PLACEHOLDER
          </Text>
        </TouchableOpacity>
      </View>
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

SettingsScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SettingsScreen;
