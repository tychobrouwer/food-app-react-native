import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import BigBtn from '../../components/big-btn';
import BigTextInput from '../../components/big-text-input';
import ScreenDefault from '../../components/screen-wrapper';

import { stylesMain } from '../../styles'
import { styles } from './styles.js'

export const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  return (
    <ScreenDefault>
      <Text style={styles.loginText}>SIGNUP</Text>

      <View style={styles.loginContainer}>
        <BigTextInput
          placeholder='Email'
          autoComplete='email'
          keyboardType='email-address'
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText}></Text>
        </View>

        <BigTextInput
          style={{ marginBottom: 25 }}
          placeholder='Password'
          autoComplete='password'
          secureTextEntry={true}
          value={password1}
          onChangeText={(password1) => {
            setPassword1(password1);
          }}
        />

        <BigTextInput
          placeholder='Password'
          autoComplete='password'
          secureTextEntry={true}
          value={password2}
          onChangeText={(password2) => {
            setPassword2(password2);
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText}></Text>
        </View>

        <BigBtn
          title='SIGN UP'
          onPress={() => {
            navigation.pop(1);
          }}
        />

        <View style={stylesMain.flex}>
          <Text style={stylesMain.text}>Already a user? </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.pop(1)
            }
          >
            <Text style={stylesMain.link}>login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenDefault>
  );
};