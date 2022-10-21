import React, { useContext } from 'react';
import {
  Text, View,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import { GlobalStateContext } from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import BigBtn from '../../components/big-btn';

// import styles
import styles from './styles';
import stylesMain from '../../styles';
import { secureStoreDelete } from '../../utils/secure-store';

// return the settings screen component
const SettingsScreen = function SettingsScreen({ navigation }) {
  const { credentials } = useContext(GlobalStateContext);

  return (
    <ScreenDefault scrollEnabled={false}>
      <TopNavigator navigation={navigation} />
      <View style={styles.banner}>
        <Text style={styles.titleText}>
          Welcome
          {` ${credentials.firstName || ''}`}
        </Text>
        <Text style={styles.secondaryText}>
          {credentials.email}
        </Text>
      </View>
      <View style={[stylesMain.content, { alignItems: 'center' }]}>
        <BigBtn
          title="User Profile"
          onPress={() => {
            navigation.push('UserProfile');
          }}
        />
        <BigBtn
          title="User Groups"
          onPress={() => {
            navigation.push('UserGroup');
          }}
        />
        <BigBtn
          title="Privacy Policy"
          onPress={() => {
            navigation.push('PrivacyPolicy');
          }}
        />
        <BigBtn
          style={styles.signOutBtn}
          title="Log Out"
          onPress={() => {
            secureStoreDelete('email');
            secureStoreDelete('token');
            secureStoreDelete('group');

            navigation.replace('SignIn');
          }}
        />

      </View>
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

SettingsScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default SettingsScreen;
