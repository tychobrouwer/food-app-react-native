import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

// import components and utils
import { secureStoreGet } from '../../utils/secure-store';
import { GlobalDispatchContext, SET_CREDENTIALS } from '../../components/global-state';
import { authSignIn, getClientSalt } from '../../utils/authentication';
import Loader from '../../components/loader';

// loading screen function
const LoadingScreen = function LoadingScreen({ navigation }) {
  const dispatch = useContext(GlobalDispatchContext);

  // function for getting and authorizing stored credentials
  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        // get stored credentials
        const email = await secureStoreGet('email');
        const passwordHash = await secureStoreGet('token');

        // getting client salt from server
        const salt = await getClientSalt(email);

        // authorize automatic sign in with the server
        const authResult = await authSignIn(email, passwordHash, salt);

        if (authResult.result) {
          // set local variables with the credentials
          dispatch({ type: SET_CREDENTIALS, payload: { email, passwordHash } });

          // navigate to home screen
          navigation.replace('Home');
        }
      } finally {
        // if no valid credientials stored go to sign in
        navigation.replace('SignIn');
      }
    };

    // running function
    bootstrapAsync();
  }, []);

  // return loader screen component
  return (<Loader />);
};

LoadingScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoadingScreen;
