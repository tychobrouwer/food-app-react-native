import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, ScrollView, Dimensions
} from 'react-native';
//import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
//import { Constants } from "expo";

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';

// import styles
import styles from '../../styles';
import stylesMain from '../../styles';

// more imports
import * as FileSystem from 'expo-file-system';
import * as IntentLauncher from 'expo-intent-launcher';

// return the pdf
// I have not been able to get this to work properly so far

// Scrollview renderer, this does not work.
const PrivacyPolicyScreen = function PrivacyPolicyScreen({ navigation }) {
   return (
      <ScreenDefault>
        <TopNavigator navigation={navigation} />
        <View style={stylesMain.content}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Text style={styles.contentHeaderText}>
              LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
            </Text>
          </ScrollView>
        </View>
        <BottomNavigator navigation={navigation} />
      </ScreenDefault>
    );
  };



PrivacyPolicyScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default PrivacyPolicyScreen;