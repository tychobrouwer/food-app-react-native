import * as Crypto from 'expo-crypto';
import * as Random from 'expo-random';

import validateEmail from "../validate-email";

export const authenticate = async (email, passwordHash) => {
  let message = { type: 'login', value: 'Login successful.' };

  const emailEmptyCheck = email !== '';
  const emailValidCheck = validateEmail(email) !== null;

  const salt = await getClientSalt(email);
  const emptyHash = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    '' + salt,
  );
  const passwordEmptyCheck = passwordHash !== emptyHash;

  // In future send passwordHash to server
  // On server hash sent passwordHash with saved serverSalt
  // Then compare new hash to stored hash
  const validAuth = true;

  if (!emailEmptyCheck) {
    message = { type: 'email', value: 'Enter an email.' };
  } else if (!emailValidCheck) {
    message = { type: 'email', value: 'Enter a valid email.' };
  } else if (!passwordEmptyCheck) {
    message = { type: 'password', value: 'Enter a password.' };
  } else if (!validAuth) {
    message = { type: 'password', value: 'Incorrect password or email.' };
  }

  const result = emailEmptyCheck && passwordEmptyCheck && emailValidCheck;

  return { result, message };
}

export const getClientSalt = async (email) => {
  // In future get client salt from server
  const salt = 'rsgjshorgriogjrsiogrsigiirsgo';

  return salt;
}