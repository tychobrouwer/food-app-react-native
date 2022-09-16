import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import { GlobalStateContext } from '../../components/global-state';
import ScreenDefault from '../../components/screen-wrapper';
import { secureStoreDelete } from '../../utils/secure-store';

const HomeScreen = function HomeScreen({ navigation }) {
  const globalState = useContext(GlobalStateContext);

  return (
    <ScreenDefault>
      <Text style={{ marginTop: '40%' }}>
        This is&nbsp;
        { globalState.credentials.email }
        &apos;s profile
      </Text>

      <Button
        title="Logout"
        onPress={() => {
          console.log(`log out user: ${globalState.credentials.email}`);

          secureStoreDelete('email');
          secureStoreDelete('token');

          navigation.navigate('SignIn');
        }}
      />
    </ScreenDefault>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
