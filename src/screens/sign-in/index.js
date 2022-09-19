import React, { useContext, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';
import PropTypes from 'prop-types';
import * as Crypto from 'expo-crypto';

import { GlobalDispatchContext, SET_CREDENTIALS } from '../../components/global-state';

import stylesMain from '../../styles';
import styles from './styles';

import BigBtn from '../../components/big-btn';
import BigTextInput from '../../components/big-text-input';
import ScreenDefault from '../../components/screen-wrapper';

import { authenticate, getClientSalt } from '../../utils/authentication';
import { secureStoreSet } from '../../utils/secure-store';

const SignInScreen = function SignInScreen({ navigation }) {
  const dispatch = useContext(GlobalDispatchContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const resetCheckLogin = () => {
    setPasswordText('');
    setEmailText('');
  };

  const resetLogin = () => {
    setEmail('');
    setPassword('');
    setStaySignedIn(false);
  };

  const setRed = (field) => {
    let returnStyle;

    if (field === 'email' && emailText !== '') {
      returnStyle = { borderColor: 'red' };
    } else if (field === 'password' && passwordText !== '') {
      returnStyle = { borderColor: 'red' };
    }

    return returnStyle;
  };

  const handleLogin = async () => {
    const salt = await getClientSalt(email);

    const passwordHash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password + salt,
    );

    const authResult = await authenticate(email, passwordHash, staySignedIn);

    if (authResult.result) {
      console.log('login using:', email, staySignedIn ? 'stay signed in' : '');

      dispatch({ type: SET_CREDENTIALS, payload: { email, token: passwordHash } });

      if (staySignedIn) {
        await secureStoreSet('email', email);
        await secureStoreSet('token', passwordHash);
      }

      resetLogin();

      navigation.navigate('Home');
    } else {
      const errorType = authResult.message.type;
      const errorValue = authResult.message.value;

      if (errorType === 'email') {
        setEmailText(errorValue);
      } else if (errorType === 'password') {
        setPasswordText(errorValue);
      }
    }
  };

  return (
    <ScreenDefault>
      <Text style={styles.titleText}>Welcome!</Text>
      <Text style={styles.loginText}>LOGIN</Text>

      <View style={styles.loginContainer}>
        <BigTextInput
          style={setRed('email')}
          placeholder="Email"
          autoComplete="email"
          keyboardType="email-address"
          value={email}
          onChangeText={(emailValue) => {
            setEmail(emailValue);
            resetCheckLogin();
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText}>{ emailText }</Text>
        </View>

        <BigTextInput
          style={setRed('password')}
          placeholder="Password"
          autoComplete="password"
          secureTextEntry
          value={password}
          onChangeText={(passwordValue) => {
            setPassword(passwordValue);
            resetCheckLogin();
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText}>{ passwordText }</Text>
        </View>

        <View style={[stylesMain.flex, { marginBottom: 35, marginTop: 5 }]}>
          <View
            style={[stylesMain.flex, { marginRight: '10%' }]}
          >
            <Checkbox
              value={staySignedIn}
              style={stylesMain.checkbox}
              onValueChange={setStaySignedIn}
            />

            <Text style={stylesMain.checkboxText}>Remember me</Text>
          </View>

          <TouchableOpacity>
            <Text style={stylesMain.link}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <BigBtn
          title="LOGIN"
          onPress={() => handleLogin()}
        />

        <View style={stylesMain.flex}>
          <Text style={stylesMain.text}>Not registered yet? </Text>
          <TouchableOpacity
            onPress={() => navigation.push('SignUp')}
          >
            <Text style={stylesMain.link}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenDefault>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignInScreen;
