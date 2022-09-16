import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import BigBtn from '../../components/big-btn';
import BigTextInput from '../../components/big-text-input';
import ScreenDefault from '../../components/screen-wrapper';

import stylesMain from '../../styles';
import styles from './styles';

const SignUpScreen = function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  return (
    <ScreenDefault>
      <Text style={styles.loginText}>SIGNUP</Text>

      <View style={styles.loginContainer}>
        <BigTextInput
          placeholder="Email"
          autoComplete="email"
          keyboardType="email-address"
          value={email}
          onChangeText={() => {
            setEmail(email);
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText} />
        </View>

        <BigTextInput
          style={{ marginBottom: 25 }}
          placeholder="Password"
          autoComplete="password"
          secureTextEntry
          value={password1}
          onChangeText={() => {
            setPassword1(password1);
          }}
        />

        <BigTextInput
          placeholder="Password"
          autoComplete="password"
          secureTextEntry
          value={password2}
          onChangeText={() => {
            setPassword2(password2);
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText} />
        </View>

        <BigBtn
          title="SIGN UP"
          onPress={() => {
            navigation.pop(1);
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
