import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { useState } from "react";

import { stylesMain } from '../styles/main_styles.js'
import { stylesLogin } from '../styles/login_styles.js'

export const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={stylesMain.container}>
      <Text style={stylesLogin.loginText}>SIGNUP</Text>

      <View style={stylesLogin.loginContainer}>

        <View style={stylesMain.inputView}>
          <TextInput
            style={stylesMain.TextInput}
            placeholder="Email"
            placeholderTextColor="grey"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={stylesMain.inputView}>
          <TextInput
            style={stylesMain.TextInput}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <View style={stylesMain.inputView}>
          <TextInput
            style={stylesMain.TextInput}
            placeholder="Repeat password"
            placeholderTextColor="grey"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity
          style={stylesLogin.loginBtn}
          onPress={() =>
            navigation.navigate('Login', {})
          }
        >
          <Text>SIGN UP</Text>
        </TouchableOpacity>
        
        <View style={stylesMain.flex}>
          <Text style={stylesMain.text}>Already a user? </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.pop('Login', {})
            }
          >
            <Text style={stylesMain.link}>login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};