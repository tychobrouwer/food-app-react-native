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
// import styles from './styles';
import stylesMain from '../../styles';

// return the home screen component
const SettingsScreen = function SettingsScreen({ navigation }) {
  return (
    <ScreenDefault>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <TouchableOpacity style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            SETTINGS
          </Text>
        </TouchableOpacity>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text style={stylesMain.text}>USER PROFILE IMAGE HERE</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text style={stylesMain.text}>ACCOUNT SETTINGS</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text style={stylesMain.text}>NOTIFICATION SETTINGS</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text style={stylesMain.text}>APP SETTINGS</Text>
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text style={stylesMain.text}>PRIVACY POLICY</Text>
          </View>
        </View>
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
