import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import { secureStoreGet } from '../../utils/secure-store';
import { GlobalDispatchContext, SET_CREDENTIALS } from '../../components/global-state';
import { authSignIn, getClientSalt } from '../../utils/authentication';
import Loader from '../../components/loader';

const LoadingScreen = function LoadingScreen({ navigation }) {
  const dispatch = useContext(GlobalDispatchContext);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const email = await secureStoreGet('email');
        const passwordHash = await secureStoreGet('token');

        const salt = await getClientSalt(email);

        const authResult = await authSignIn(email, passwordHash, salt);

        if (authResult.result) {
          dispatch({ type: SET_CREDENTIALS, payload: { email, passwordHash } });

          navigation.replace('Home');
        }
      } finally {
        navigation.replace('SignIn');
      }
    };

    bootstrapAsync();
  }, []);

  return (<Loader />);
};

LoadingScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoadingScreen;
