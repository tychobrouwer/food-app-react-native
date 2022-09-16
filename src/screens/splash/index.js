import React, { useEffect, useContext, useState } from 'react';

import { secureStoreGet } from '../../utils/secure-store';
import { GlobalDispatchContext, SET_CREDENTIALS } from '../../components/global-state'
import Loader from '../../components/loader';
import { authenticate } from '../../utils/authentication';

export const SplashScreen = ({ navigation }) => {
  const dispatch = useContext(GlobalDispatchContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let email;
      let passwordHash;

      console.log('retrieving saved email and token');

      try {
        email = await secureStoreGet('email');
        passwordHash = await secureStoreGet('token');
      } catch (e) {
        navigation.navigation('SignIn');
      }

      console.log('saved account found:', email);

      const authResult = await authenticate(email, passwordHash);

      if (authResult.result) {
        console.log('email and password valid');

        dispatch({type: SET_CREDENTIALS, payload: { email: email, token: passwordHash }});

        navigation.navigate('Home');
      } else {
        setTimeout(() => {
          navigation.navigate('SignIn');
        }, 1000);
      }

      setLoading(false);
    };

    if (loading) {
      bootstrapAsync();
    }
  });

  return (
    <Loader/>
  )
}