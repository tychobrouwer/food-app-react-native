import React, { useContext, useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

import { GlobalStateContext, GlobalDispatchContext, SET_CREDENTIALS } from '../../components/global-state'

import { stylesMain } from '../../styles'
import { stylesLogin } from './styles.js'
import BigBtn from '../../components/big-btn';
import BigTextInput from '../../components/big-text-input';

import validateEmail from '../../utils/validate-email';
import ScreenDefault from '../../components/screen-default';

export const LoginScreen = ({ navigation }) => {
  const globalState = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [passwordText, setPasswordText] = useState('');

  const authenticate = () => {
    const emailEmptyCheck = email !== '';
    const emailValidCheck = validateEmail(email) !== null
    const passwordEmptyCheck = password !== '';
  
    if (!emailEmptyCheck) {
      setEmailText('Enter an email.');
    } else if (!emailValidCheck) {
      setEmailText('Enter a valid email.');
    } else if (!passwordEmptyCheck) {
      setPasswordText('Enter a password.');
    }
  
    return emailEmptyCheck && passwordEmptyCheck && emailValidCheck;
  }

  const resetCheckLogin = () => {
    setPasswordText('');
    setEmailText('');
  }

  const setRed = (field) => {
    let returnStyle;
    
    if (field === 'email' && emailText !== '') { 
      returnStyle = { borderColor: 'red' }
    } else if (field === 'password' && passwordText !== '') {
      returnStyle = { borderColor: 'red' }
    }

    return returnStyle;
  }

  return (
    <ScreenDefault>
      <Text style={stylesLogin.loginText}>LOGIN</Text>

      <View style={stylesLogin.loginContainer}>
        <BigTextInput
          style={setRed('email')}
          placeholder='Email'
          autoComplete='email'
          keyboardType='email-address'
          onChangeText={(email) => {
            setEmail(email);
            resetCheckLogin();
          }}
        />

        <View style={stylesMain.notification}>
          <Text style={stylesMain.notificationText}>{ emailText }</Text>
        </View>

        <BigTextInput
          style={setRed('password')}
          placeholder='Password'
          autoComplete='password'
          secureTextEntry={true}
          onChangeText={(password) => {
            setPassword(password);
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

          <TouchableOpacity
            // onPress={() =>
            //   navigation.navigate('Signup')
            // }
          >
            <Text style={stylesMain.link}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <BigBtn 
          title='LOGIN'
          onPress={() => {
            if (authenticate()) {   
              dispatch({type: SET_CREDENTIALS, payload: { email: email, password: password }});
          
              navigation.navigate('Home', { email: email });
            }
          }}
        />

        <View style={stylesMain.flex}>
          <Text style={stylesMain.text}>Not registered yet? </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.push('Signup')
            }
          >
            <Text style={stylesMain.link}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenDefault>
  );
};