import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

// import components and utils
import config from '../../config';
import BigBtn from '../../components/big-btn';
import BigTextInput from '../../components/big-text-input';
import ScreenDefault from '../../components/screen-wrapper';
import Loader from '../../components/loader';
import { authSignUp, newClientSalt } from '../../api/authentication';

// import styles
import stylesMain from '../../styles';
import styles from './styles';

// import bcrypt package
const bcrypt = require('bcryptjs');

// sign up screen function
const SignUpScreen = function SignUpScreen({ navigation }) {
  // function variables for the user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password1, setPassword1] = useState('');

  // function variables for error messages
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  // function variable boolean for loading
  const [loading, setLoading] = useState(false);

  // function to reset the error texts
  const resetCheckSignUp = () => {
    setPasswordText('');
    setEmailText('');
  };

  // function to reset the user input values
  const resetSignUp = () => {
    setEmail('');
    setPassword('');
    setPassword1('');
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

  // function to handle the sign up
  const handleSignUp = async () => {
    // set loading to true
    setLoading(true);

    // get the client salt from the server
    const salt = await newClientSalt(email);

    // hash the passwords with the salt
    // const passwordHash = bcrypt.hashSync(password, salt);
    // const passwordHash1 = bcrypt.hashSync(password1, salt);
    const [passwordHash, passwordHash1] = await Promise.all([
      bcrypt.hash(password, salt),
      bcrypt.hash(password1, salt),
    ]);

    // get the sign up result
    const authResult = await authSignUp(email, passwordHash, passwordHash1, salt);

    if (authResult.result) {
      // reset values if valid
      resetSignUp();

      // navigate back to the sign in if valid
      navigation.pop(1);
    } else {
      // get the message type and value
      const { type, value } = authResult.message;

      // set the correct error text accordingly
      if (type === 'email') {
        setEmailText(value);
      } else if (type === 'password') {
        setPasswordText(value);
      }
    }

    // set loading to false
    setLoading(false);
  };

  // return the sign up screen component
  return (
    <ScreenDefault scrollEnabled>
      <Loader style={!loading ? stylesMain.hidden : {}} background={false} />

      <View style={stylesMain.banner}>
        <Text style={[styles.text, styles.titleText]}>Create Account</Text>
      </View>

      <View style={styles.loginContainer}>
        <BigTextInput
          style={setRed('email')}
          placeholder="Email"
          autoComplete="email"
          keyboardType="email-address"
          textContentType="emailAddress"
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
          style={[setRed('password'), { marginBottom: 25 }]}
          placeholder="Password"
          autoComplete="password"
          textContentType="newPassword"
          secureTextEntry
          value={password}
          onChangeText={(passwordValue) => {
            setPassword(passwordValue);
            resetCheckSignUp();
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
          placeholder="Password"
          autoComplete="password"
          textContentType="newPassword"
          secureTextEntry
          value={password1}
          onChangeText={(passwordValue) => {
            setPassword1(passwordValue);
            resetCheckSignUp();
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
          title="SIGN UP"
          onPress={() => {
            handleSignUp();
          }}
        />

        <View style={stylesMain.flex}>
          <Text style={styles.text}>Already a user? </Text>
          <TouchableOpacity
            onPress={() => navigation.pop(1)}
          >
            <Text style={stylesMain.link}>Sign In</Text>
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
