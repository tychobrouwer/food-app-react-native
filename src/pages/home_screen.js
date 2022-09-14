import { Text, View, Button } from 'react-native';

import { stylesMain } from '../styles/main_styles.js'

export const HomeScreen = ({ navigation, route }) => {
  const { email } = route.params;
  return (
    <View style={stylesMain.container}>
      <Text style={{marginTop: "40%"}}>This is {email}'s profile</Text>

      <Button
        title="Logout"
        onPress={() =>
          navigation.navigate('Login')
        }
      />
    </View>
  );
};