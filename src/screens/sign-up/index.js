import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import * as Crypto from 'expo-crypto';

import BigBtn from '../../components/big-btn';
import BigTextInput from '../../components/big-text-input';
import ScreenDefault from '../../components/screen-wrapper';

import stylesMain from '../../styles';
import styles from './styles';
import { authSignUp, newClientSalt } from '../../utils/authentication';

const SignUpScreen = function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const resetCheckSignUp = () => {
    setPasswordText('');
    setEmailText('');
  };

  const resetSignUp = () => {
    setEmail('');
    setPassword('');
    setPassword1('');
  };

  const handleSignUp = async () => {
    const salt = await newClientSalt(email);

    const passwordHash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      `${password}${salt}`,
    );
    const passwordHash1 = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      `${password1}${salt}`,
    );

    console.log(passwordHash, password, salt);

    const authResult = await authSignUp(email, passwordHash, passwordHash1, salt);

    if (authResult.result) {
      console.log(`sign up using: ${email}`);

      resetSignUp();
      navigation.pop(1);
    } else {
      console.log(`failed sign up using: ${email}`);
      const { type, value } = authResult.message;

      if (type === 'email') {
        setEmailText(value);
      } else if (type === 'password') {
        setPasswordText(value);
      }
    }
  };

  return (
    <ScreenDefault>
      <Text style={styles.loginText}>SIGNUP</Text>

      <View style={styles.loginContainer}>
        <BigTextInput
          placeholder="Email"
          autoComplete="email"
          keyboardType="email-address"
          value={email}
          onChangeText={(emailValue) => {
            setEmail(emailValue);
            resetCheckSignUp();
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText}>{ emailText }</Text>
        </View>

        <BigTextInput
          style={{ marginBottom: 25 }}
          placeholder="Password"
          autoComplete="password"
          secureTextEntry
          value={password}
          onChangeText={(passwordValue) => {
            setPassword(passwordValue);
            resetCheckSignUp();
          }}
        />

        <BigTextInput
          placeholder="Password"
          autoComplete="password"
          secureTextEntry
          value={password1}
          onChangeText={(passwordValue) => {
            setPassword1(passwordValue);
            resetCheckSignUp();
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText}>{ passwordText }</Text>
        </View>

        <BigBtn
          title="SIGN UP"
          onPress={() => {
            handleSignUp();
          }}
        />

        <View style={stylesMain.flex}>
          <Text style={stylesMain.text}>Already a user? </Text>
          <TouchableOpacity
            onPress={() => navigation.pop(1)}
          >
            <Text style={stylesMain.link}>login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenDefault>
  );
};

SignUpScreen.propTypes = {
  navigation: PropTypes.shape({
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUpScreen;
