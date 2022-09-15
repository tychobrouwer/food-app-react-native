import React, { useEffect, useContext, useState } from 'react';

import { secureStoreGet } from '../../utils/secure-store';
import { GlobalDispatchContext, SET_CREDENTIALS } from '../../components/global-state'
import Loader from '../../components/loader';

export const SplashScreen = ({ navigation }) => {
  const dispatch = useContext(GlobalDispatchContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let email;
      let userToken;

      console.log('retrieving saved email and token');

      try {
        email = await secureStoreGet('email');
        userToken = await secureStoreGet('token');
      } catch (e) {
        navigation.navigation('SignIn');
      }

      console.log('email and token retrieved:', email, userToken);

      // validate token here
      const valid = userToken && email;

      setLoading(false);

      if (valid) {
        console.log('email and token valid');

        dispatch({type: SET_CREDENTIALS, payload: { email: email, token: userToken }});

        navigation.navigate('Home');
      } else {
        console.log('no valid email and token found');

        setTimeout(() => {
          navigation.navigate('SignIn');
        }, 1000);
      }
    };

    if (loading) {
      bootstrapAsync();
    }
  });

  return (
    <Loader/>
  )
}