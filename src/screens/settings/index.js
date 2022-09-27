import React from 'react';
import {
  View,
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
        {/* INSERT PAGE CONTENT HERE */}
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
