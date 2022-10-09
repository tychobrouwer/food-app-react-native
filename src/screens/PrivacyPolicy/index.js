import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import { Constants } from "expo";

// import components and utils
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';

// import styles
import styles from '../../styles';
import stylesMain from '../../styles';

// return the pdf
// I have not been able to get this to work properly so far
export default class PrivacyPolicyScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <WebView
                    bounces={false}
                    scrollEnabled={false}
                    source={{uri: "../../assets/PrivacyPolicy.pdf"}} />
            </View>
        );
    }
}


PrivacyPolicyScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

//export default PrivacyPolicyScreen;