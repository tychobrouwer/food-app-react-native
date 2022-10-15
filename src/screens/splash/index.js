import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

// import components and utils
import { secureStoreGet } from '../../utils/secure-store';
import {
  GlobalDispatchContext, SET_CREDENTIALS, SET_GROUP, SET_INVENTORY,
} from '../../components/global-state';
import { authSignIn, getClientSalt } from '../../api/authentication';
import Loader from '../../components/loader';
import { getUserGroups } from '../../api/inventory';

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

        // // getting client salt from server
        const salt = await getClientSalt(email);

        // // authorize automatic sign in with the server
        const authResult = await authSignIn(email, passwordHash, salt);

        if (authResult.result) {
          // set local variables with the credentials
          const group = await getUserGroups(authResult.userID, passwordHash);

          // set local variables to the credentials
          dispatch({
            type: SET_CREDENTIALS,
            payload: {
              userID: authResult.data.userID,
              firstName: authResult.data.firstName,
              lastName: authResult.data.lastName,
              email,
              passwordHash,
            },
          });
          dispatch({ type: SET_GROUP, payload: group[0] });
          dispatch({ type: SET_INVENTORY, payload: authResult.data.inventory });

          // navigate to home screen
          navigation.replace('Home');
        } else {
        // if no VALID credentials stored go to sign in
          navigation.replace('SignIn', { error: true });
        }
      } catch {
        // if no credentials stored go to sign in
        navigation.replace('SignIn');
      }
    };

    // running function
    bootstrapAsync();
  }, []);

  // return loader screen component
  return (<Loader background />);
};

LoadingScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoadingScreen;
