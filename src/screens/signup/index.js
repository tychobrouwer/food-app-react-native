import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import BigBtn from '../../components/big-btn';
import BigTextInput from '../../components/big-text-input';
import ScreenDefault from '../../components/screen-default';

import { stylesMain } from '../../styles'
import { stylesLogin } from './styles.js'

export const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScreenDefault>
      <Text style={stylesLogin.loginText}>SIGNUP</Text>

      <View style={stylesLogin.loginContainer}>
        <BigTextInput
          placeholder='Email'
          autoComplete='email'
          keyboardType='email-address'
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
          onChangeText={(password) => {
            setPassword(password);
        }}
        />

        <BigTextInput
          placeholder='Password'
          autoComplete='password'
          secureTextEntry={true}
          onChangeText={(password) => {
            setPassword(password);
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