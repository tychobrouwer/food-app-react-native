import * as Crypto from 'expo-crypto';

import validateEmail from '../validate-email';

export const getClientSalt = async (email) => {
  const response = await fetch('http://192.168.178.142:3000/get-client-salt', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });

  const salt = await response.json();

  return salt;
};

export const newClientSalt = async (email) => {
  const response = await fetch('http://192.168.178.142:3000/new-client-salt', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });

  const salt = await response.json();

  return salt;
};

export const authSignIn = async (email, passwordHash) => {
  let message = { type: 'login', value: 'Login successful.' };

  const emailEmptyCheck = email !== '';
  const emailValidCheck = validateEmail(email) !== null;

  let passwordEmptyCheck = false;
  let passwordValidCheck = false;

  if (emailEmptyCheck && emailValidCheck) {
    try {
      const salt = await getClientSalt(email);
      const emptyHash = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        salt,
      );

      passwordEmptyCheck = passwordHash !== emptyHash;

      const response = await fetch('http://192.168.178.142:3000/sign-in', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password: passwordHash,
        }),
      });

      const result = await response.json();

      if (result.result) {
        passwordValidCheck = true;
      }
    } catch (error) {
      //
    }
  }

  if (!emailEmptyCheck) {
    message = { type: 'email', value: 'Enter an email.' };
  } else if (!emailValidCheck) {
    message = { type: 'email', value: 'Enter a valid email.' };
  } else if (!passwordValidCheck) {
    message = { type: 'password', value: 'Incorrect email or password.' };
  } else if (!passwordEmptyCheck) {
    message = { type: 'password', value: 'Enter a password.' };
  }

  const result = emailEmptyCheck && emailValidCheck && passwordEmptyCheck && passwordValidCheck;

  return { result, message };
};

export const authSignUp = async (email, passwordHash, passwordHash1, salt) => {
  let message = { type: 'login', value: 'Login successful.' };

  const emailEmptyCheck = email !== '';
  const emailValidCheck = validateEmail(email) !== null;
  const passwordNotSameCheck = passwordHash === passwordHash1;

  let passwordEmptyCheck = false;
  let passwordValidCheck = false;

  if (emailEmptyCheck && emailValidCheck && passwordNotSameCheck) {
    try {
      const emptyHash = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        salt,
      );

      passwordEmptyCheck = passwordHash !== emptyHash;

      const response = await fetch('http://192.168.178.142:3000/sign-up', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password: passwordHash,
        }),
      });

      const result = await response.json();

      if (result.result) {
        passwordValidCheck = true;
      }
    } catch (error) {
      //
    }
  }

  if (!emailEmptyCheck) {
    message = { type: 'email', value: 'Enter an email.' };
  } else if (!emailValidCheck) {
    message = { type: 'email', value: 'Enter a valid email.' };
  } else if (!passwordNotSameCheck) {
    message = { type: 'password', value: 'Passwords do not match.' };
  } else if (!passwordValidCheck) {
    message = { type: 'email', value: 'Email already has an account.' };
  } else if (!passwordEmptyCheck) {
    message = { type: 'password', value: 'Enter a password.' };
  }

  const result = emailEmptyCheck
                 && emailValidCheck
                 && passwordNotSameCheck
                 && passwordEmptyCheck
                 && passwordValidCheck;

  return { result, message };
};
