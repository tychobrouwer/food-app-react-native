import React, { useContext, useState } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import PropTypes from 'prop-types';

// import components and utils
import config from '../../config';
import {
  GlobalDispatchContext, SET_CREDENTIALS, SET_GROUP, SET_INVENTORY,
} from '../../components/global-state';
import BigBtn from '../../components/big-btn';
import BigTextInput from '../../components/big-text-input';
import ScreenDefault from '../../components/screen-wrapper';
import Loader from '../../components/loader';
import { secureStoreSet } from '../../utils/secure-store';
import { authSignIn, getClientSalt } from '../../api/authentication';

// import logo image
import LogoNameBelowImage from '../../../assets/logo/logo-name-below-image';

// import styles
import stylesMain from '../../styles';
import styles from './styles';
import { getUserGroups } from '../../api/inventory';

// import bcrypt package
const bcrypt = require('bcryptjs');

// sign in screen function
const SignInScreen = function SignInScreen({ navigation }) {
  // set the dispatch to set the local values
  const dispatch = useContext(GlobalDispatchContext);

  // function variables for the user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  // function variable boolean for loading
  const [loading, setLoading] = useState(false);

  // function variables for setting both fields to red
  const [bothRed, setBothRed] = useState(false);

  // function to reset the error texts
  const resetLoginCheck = () => {
    setPasswordText('');
    setEmailText('');
    setBothRed(false);
  };

  // function to reset the user input values
  const resetLogin = () => {
    setEmail('');
    setPassword('');
    setStaySignedIn(false);
  };

  // function to set element style to red
  const setRed = (field) => {
    let returnStyle;

    // return style only if applicable
    if (field === 'email' && emailText !== '') {
      returnStyle = { borderColor: config.errorColor };
    } else if (field === 'password' && passwordText !== '') {
      returnStyle = { borderColor: config.errorColor };
    } else if (bothRed) {
      returnStyle = { borderColor: config.errorColor };
    }

    return returnStyle;
  };

  // function to handle the sign in
  const handleSignIn = async () => {
    // set loading to true
    setLoading(true);

    // get client salt from the server
    const salt = await getClientSalt(email);

    // hash the password with the salt
    // const passwordHash = bcrypt.hashSync(password, salt);
    const passwordHash = await bcrypt.hash(password, salt);

    // get the sign in result
    const authResult = await authSignIn(email, passwordHash, salt);

    if (authResult.result) {
      const group = await getUserGroups(authResult.userID, passwordHash);

      // set local variables to the credentials
      dispatch({
        type: SET_CREDENTIALS,
        payload: {
          userID: authResult.data.userID, email, passwordHash,
        },
      });
      dispatch({ type: SET_GROUP, payload: group[0] });
      dispatch({ type: SET_INVENTORY, payload: authResult.data.inventory });

      // if stay signed in store credentials in secure store
      if (staySignedIn) {
        secureStoreSet('email', email);
        secureStoreSet('token', passwordHash);
      }

      // reset values if valid
      resetLogin();

      // navigate to home screen if valid
      navigation.replace('Home');
    } else {
      // get the message type and value
      const { type, value } = authResult.message;

      // set the correct error text accordingly
      if (type === 'email') {
        setEmailText(value);
      } else if (type === 'password') {
        setPasswordText(value);
      } else if (type === 'both') {
        setPasswordText(value);
        setBothRed(true);
      }
    }

    // set loading to false
    setLoading(false);
  };

  // return the sign in screen component
  return (
    <ScreenDefault scrollEnabled>
      <Loader style={!loading ? stylesMain.hidden : {}} background={false} />

      <View style={stylesMain.banner}>
        <Text style={[styles.text, styles.titleText]}>Welcome!</Text>
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
            resetLoginCheck();
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
            resetLoginCheck();
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
              color={staySignedIn ? config.secondaryColor : undefined}
              onValueChange={setStaySignedIn}
            />

            <Text style={styles.text}>Remember me</Text>
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
          <Text style={styles.text}>Not registered yet? </Text>
          <TouchableOpacity
            onPress={() => {
              resetLoginCheck();
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
