import React, { useContext, useState } from 'react';
import {
  Text, View,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import { GlobalDispatchContext, GlobalStateContext, SET_CREDENTIALS } from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import BigTextInput from '../../components/big-text-input';
import BigBtn from '../../components/big-btn';

// import styles
import styles from './styles';
import stylesMain from '../../styles';
import config from '../../config';

// return the accountsettings screen component
const UserProfileScreen = function UserProfileScreen({ navigation }) {
  // set the dispatch to set the local values
  const dispatch = useContext(GlobalDispatchContext);

  const { credentials } = useContext(GlobalStateContext);
  const newCredentials = credentials;

  // function variables for the user input
  const [email, setEmail] = useState(credentials.email);
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  // function variables for error messages
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const updateCredential = (type, value) => {
    newCredentials[type] = value;
  };

  const saveCredentials = () => {
    dispatch({ type: SET_CREDENTIALS, payload: credentials });
  };

  // function to set element style to red
  const setRed = (field) => {
    let returnStyle = {};

    // return style only if applicable
    if (field === 'email' && emailText !== '') {
      returnStyle = { borderColor: config.errorColor };
    } else if (field === 'password' && passwordText !== '') {
      returnStyle = { borderColor: config.errorColor };
    }

    return returnStyle;
  };

  return (
    <ScreenDefault>
      <TopNavigator navigation={navigation} />
      <View style={[stylesMain.content, { alignItems: 'center' }]}>
        <Text style={styles.settingTitle}>Update Name</Text>
        <BigTextInput
          style={{ marginBottom: 25 }}
          placeholder="First name"
          value={credentials.firstName}
          onChangeText={(firstNameValue) => {
            updateCredential('firstName', firstNameValue);
          }}
        />
        <BigTextInput
          style={{ marginBottom: 25 }}
          placeholder="Last name"
          value={credentials.lastName}
          onChangeText={(lastNameValue) => {
            updateCredential('lastName', lastNameValue);
          }}
        />
        <Text style={styles.settingTitle}>Update Email</Text>
        <BigTextInput
          style={setRed('email')}
          autoComplete="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Email"
          value={email}
          onChangeText={(emailValue) => {
            setEmail(emailValue);
            setEmailText('');
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText}>{ emailText }</Text>
        </View>

        <Text style={styles.settingTitle}>Update Password</Text>
        <BigTextInput
          style={[setRed('password'), { marginBottom: 25 }]}
          placeholder="Password"
          autoComplete="password"
          textContentType="newPassword"
          secureTextEntry
          value={password}
          onChangeText={(passwordValue) => {
            setPassword(passwordValue);
            setPasswordText('');
          }}
          onEndEditing={(event) => {
            if (event.nativeEvent.text.length === 0) {
              setPassword('');
              setPassword1('');
            }
          }}
        />

        <BigTextInput
          style={setRed('password')}
          placeholder="Repeat password"
          autoComplete="password"
          textContentType="newPassword"
          secureTextEntry
          value={password1}
          onChangeText={(passwordValue) => {
            setPassword1(passwordValue);
            setPasswordText('');
          }}
          onEndEditing={(event) => {
            if (event.nativeEvent.text.length === 0) {
              setPassword('');
              setPassword1('');
            }
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText}>{ passwordText }</Text>
        </View>

        <BigBtn
          title="SAVE"
          onPress={() => {
            saveCredentials();
          }}
        />

      </View>
      <BottomNavigator navigation={navigation} />
    </ScreenDefault>
  );
};

UserProfileScreen.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default UserProfileScreen;
