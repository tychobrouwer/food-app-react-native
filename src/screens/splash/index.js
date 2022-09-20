import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { secureStoreGet } from '../../utils/secure-store';
import { GlobalDispatchContext, SET_CREDENTIALS } from '../../components/global-state';
import { authSignIn } from '../../utils/authentication';
import Loader from '../../components/loader';

const LoadingScreen = function LoadingScreen({ navigation }) {
  const dispatch = useContext(GlobalDispatchContext);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let email;
      let passwordHash;

      try {
        email = await secureStoreGet('email');
        passwordHash = await secureStoreGet('token');

        console.log(`saved account found: ${email}`);

        const authResult = await authSignIn(email, passwordHash);

        if (authResult.result) {
          console.log('email and password valid');

          dispatch({ type: SET_CREDENTIALS, payload: { email, passwordHash } });

          navigation.navigate('Home');
        }
      } catch (e) {
        console.log('no saved account found');
      } finally {
        navigation.navigate('SignIn');
      }
    };

    bootstrapAsync();
  }, []);

  return (<Loader />);
};

LoadingScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoadingScreen;
