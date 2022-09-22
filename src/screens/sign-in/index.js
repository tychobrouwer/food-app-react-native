import React, { useContext, useState } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import PropTypes from 'prop-types';

import { GlobalDispatchContext, SET_CREDENTIALS } from '../../components/global-state';

import stylesMain from '../../styles';
import styles from './styles';

import BigBtn from '../../components/big-btn';
import BigTextInput from '../../components/big-text-input';
import ScreenDefault from '../../components/screen-wrapper';
import Loader from '../../components/loader';

import LogoNameBelowImage from '../../../assets/logo/logo-name-below-image';

import { authSignIn, getClientSalt } from '../../utils/authentication';

import { secureStoreSet } from '../../utils/secure-store';

const bcrypt = require('bcryptjs');

const SignInScreen = function SignInScreen({ navigation }) {
  const dispatch = useContext(GlobalDispatchContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const [loading, setLoading] = useState(false);
  const [bothRed, setBothRed] = useState(false);

  const resetCheckLogin = () => {
    setPasswordText('');
    setEmailText('');
    setBothRed(false);
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
    } else if (bothRed) {
      returnStyle = { borderColor: 'red' };
    }

    return returnStyle;
  };

  const handleSignIn = async () => {
    setLoading(true);

    const salt = await getClientSalt(email);

    const passwordHash = bcrypt.hashSync(password, salt);

    const authResult = await authSignIn(email, passwordHash, salt);

    if (authResult.result) {
      dispatch({ type: SET_CREDENTIALS, payload: { email, token: passwordHash } });

      if (staySignedIn) {
        secureStoreSet('email', email);
        secureStoreSet('token', passwordHash);
      }

      resetLogin();

      navigation.replace('Home');
    } else {
      const { type, value } = authResult.message;

      if (type === 'email') {
        setEmailText(value);
      } else if (type === 'password') {
        setPasswordText(value);
      } else if (type === 'both') {
        setPasswordText(value);
        setBothRed(true);
      }
    }

    setLoading(false);
  };

  return (
    <ScreenDefault>
      <Loader style={!loading ? stylesMain.hidden : {}} />

      <View style={stylesMain.banner}>
        <Text style={[stylesMain.text, styles.titleText]}>Welcome!</Text>
        <LogoNameBelowImage width={160} height={160} />
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
          textContentType="password"
          secureTextEntry
          value={password}
          onChangeText={(passwordValue) => {
            setPassword(passwordValue);
            resetCheckLogin();
          }}
          onEndEditing={(event) => {
            if (event.nativeEvent.text.length === 0) {
              setPassword('');
            }
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText}>{ passwordText }</Text>
        </View>

        <View style={[stylesMain.flex, { marginBottom: 35, marginTop: 5 }]}>
          <TouchableOpacity
            style={[stylesMain.flex, { marginRight: '10%' }]}
            onPress={() => setStaySignedIn(!staySignedIn)}
          >
            <Checkbox
              value={staySignedIn}
              style={stylesMain.checkbox}
              color={staySignedIn ? '#c98fe9' : undefined}
              onValueChange={setStaySignedIn}
            />

            <Text style={stylesMain.text}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={stylesMain.link}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <BigBtn
          title="LOGIN"
          onPress={() => handleSignIn()}
        />

        <View style={stylesMain.flex}>
          <Text style={stylesMain.text}>Not registered yet? </Text>
          <TouchableOpacity
            onPress={() => {
              resetCheckLogin();
              navigation.push('SignUp');
            }}
          >
            <Text style={stylesMain.link}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenDefault>
  );
};

SignInScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignInScreen;
