import React, { useContext, useState, useRef } from 'react';
import {
  Text, View,
} from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import { GlobalDispatchContext, GlobalStateContext, SET_CREDENTIALS } from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import MessageBox from '../../components/message-box';
import Loader from '../../components/loader';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import BigTextInput from '../../components/big-text-input';
import BigBtn from '../../components/big-btn';
import { getClientSalt } from '../../api/authentication';
import validateEmail from '../../utils/validate-email';

import config from '../../config';

// import styles
import styles from './styles';
import stylesMain from '../../styles';
import { updateUserDetails } from '../../api/user';

// import bcrypt package
const bcrypt = require('bcryptjs');

// return the user settings screen component
const UserProfileScreen = function UserProfileScreen({ navigation }) {
  // set the dispatch to set the local values
  const dispatch = useContext(GlobalDispatchContext);

  const messageBoxRef = useRef();

  const { credentials } = useContext(GlobalStateContext);

  // function variables for the user input
  const [firstName, setFirstName] = useState(credentials.firstName);
  const [lastName, setLastName] = useState(credentials.lastName);
  const [email, setEmail] = useState(credentials.email);
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  // function variables for error messages
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  // function variable boolean for loading
  const [loading, setLoading] = useState(false);

  const saveCredentials = async () => {
    // set loading to true
    setLoading(true);

    const toUpdate = {};

    if (firstName !== '' && firstName !== credentials.firstName) toUpdate.firstName = firstName;
    if (lastName !== '' && lastName !== credentials.lastName) toUpdate.lastName = lastName;

    if (email !== '' && email !== credentials.email) {
      const emailValidCheck = validateEmail(email) !== null;

      if (emailValidCheck) {
        toUpdate.email = email;
      } else {
        setEmailText('Enter a valid email.');
      }
    }

    const salt = getClientSalt();

    // hash the passwords with the salt
    const [passwordHash, passwordHash1] = await Promise.all([
      bcrypt.hash(password, salt),
      bcrypt.hash(password1, salt),
    ]);

    if (password !== '' && password1 !== '') {
      if (passwordHash === passwordHash1) {
        if (passwordHash !== credentials.passwordHash) {
          toUpdate.passwordHash = passwordHash;
        } else {
          setPasswordText('Password same as current password');
        }
      } else {
        setPasswordText('Passwords do not match.');
      }
    }

    const updateResult = updateUserDetails(credentials.userID, credentials.passwordHash, toUpdate);

    if (updateResult) {
      dispatch({ type: SET_CREDENTIALS, payload: Object.assign(credentials, toUpdate) });

      messageBoxRef.current.createMessage('success', 'Successfully updated account details');
    } else {
      messageBoxRef.current.createMessage('error', 'Failed to update account details');
    }

    setLoading(false);
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
    <ScreenDefault scrollEnabled>
      <Loader style={!loading ? stylesMain.hidden : {}} background={false} />
      <MessageBox ref={messageBoxRef} />
      <TopNavigator navigation={navigation} />
      <View style={[stylesMain.content, { alignItems: 'center' }]}>
        <Text style={styles.settingTitle}>Update Name</Text>
        <BigTextInput
          style={{ marginBottom: 25 }}
          placeholder="First name"
          value={firstName || ''}
          onChangeText={(firstNameValue) => {
            setFirstName(firstNameValue);
          }}
        />
        <BigTextInput
          style={{ marginBottom: 25 }}
          placeholder="Last name"
          value={lastName || ''}
          onChangeText={(lastNameValue) => {
            setLastName(lastNameValue);
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
          placeholder="New Password"
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
          placeholder="Repeat new password"
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
