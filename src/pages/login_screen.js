import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from "react";
import Checkbox from 'expo-checkbox';

import { stylesMain } from '../styles/main_styles.js'
import { stylesLogin } from '../styles/login_styles.js'

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={stylesMain.container}>
      <Text style={stylesLogin.loginText}>LOGIN</Text>

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

        <View style={[stylesMain.flex, { marginBottom: 20 }]}>
          <TouchableOpacity
            style={[stylesMain.flex, { marginRight: "10%" }]}
            onPress={() =>
              setSelection(!isSelected)
            }
          >
            <Checkbox
              value={isSelected}
              style={stylesMain.checkbox}
            />

            <Text style={stylesMain.checkboxText}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() =>
            //   navigation.navigate('Signup')
            // }
          >
            <Text style={stylesMain.link}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={stylesLogin.loginBtn}
          onPress={() => {
            navigation.navigate('Home', { email: 'email' });
          }}
        >
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <View style={stylesMain.flex}>
          <Text style={stylesMain.text}>Not registered yet? </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Signup')
            }
          >
            <Text style={stylesMain.link}>Create an Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};