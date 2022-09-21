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

        const authResult = await authSignIn(email, passwordHash);

        if (authResult.result) {
          dispatch({ type: SET_CREDENTIALS, payload: { email, passwordHash } });

          navigation.navigate('Home');
        }
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
