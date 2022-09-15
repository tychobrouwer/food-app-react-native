import React, { useContext } from 'react'
import { Text, Button } from 'react-native';

import { GlobalStateContext, GlobalDispatchContext, SET_CREDENTIALS } from '../../components/global-state'
import ScreenDefault from '../../components/screen-default';

import { stylesMain } from '../../styles'

export const HomeScreen = ({ navigation, route }) => {
  const globalState = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

  console.log(globalState);

  const { email } = route.params;
  return (
    <ScreenDefault>
      <Text style={{marginTop: "40%"}}>This is {email}'s profile</Text>

      <Button
        title="Logout"
        onPress={() =>
          navigation.navigate('SignIn')
        }
      />
    </ScreenDefault>
  );
};