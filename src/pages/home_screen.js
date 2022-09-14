import { Text, View, Button } from 'react-native';

import { stylesMain } from '../styles/main_styles.js'

export const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={stylesMain.container}>
      <Text>This is {route.params.name}'s profile</Text>

      <Button
        title="Logout"
        onPress={() =>
          navigation.navigate('Login', {})
        }
      />
    </View>
  );
};