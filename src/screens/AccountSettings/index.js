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
import stylesMain from '../../styles';

// return the accountsettings screen component
const AccountSettingsScreen = function AccountSettingsScreen({ navigation }) {
  return (
    <ScreenDefault>
      <TopNavigator navigation={navigation} />
      <View style={stylesMain.content}>
        <TouchableOpacity style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            Change Username
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            Change Password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contentHeader}>
          <Text style={styles.contentHeaderText}>
            Placeholder
          </Text>
        </TouchableOpacity>
      </View>
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

AccountSettingsScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default AccountSettingsScreen;