import React, { useContext } from 'react'
import { Text, Button } from 'react-native';

import { GlobalStateContext, GlobalDispatchContext } from '../../components/global-state'
import ScreenDefault from '../../components/screen-wrapper';
import { secureStoreDelete } from '../../utils/secure-store';

export const HomeScreen = ({ navigation }) => {
  const globalState = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  return (
    <ScreenDefault>
      <Text style={{marginTop: "40%"}}>This is {globalState.credentials.email}'s profile</Text>

      <Button
        title="Logout"
        onPress={() => {
          console.log('log out user:', globalState.credentials.email);

          secureStoreDelete('email');
          secureStoreDelete('token');

          navigation.navigate('SignIn');
        }}
      />
    </ScreenDefault>
  );
};