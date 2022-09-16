import * as Crypto from 'expo-crypto';

import validateEmail from '../validate-email';

export const getClientSalt = async (email) => {
  console.log(`getting salt of: ${email}`);

  // In future get client salt from server
  const salt = 'rsgjshorgriogjrsiogrsigiirsgo';

  return salt;
};

export const authenticate = async (email, passwordHash) => {
  let message = { type: 'login', value: 'Login successful.' };

  const emailEmptyCheck = email !== '';
  const emailValidCheck = validateEmail(email) !== null;

  let passwordEmptyCheck = false;
  let passwordValidCheck = false;

  if (emailEmptyCheck && emailValidCheck) {
    const salt = await getClientSalt(email);
    const emptyHash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      salt,
    );

    passwordEmptyCheck = passwordHash !== emptyHash;

    // In future send passwordHash to server
    // On server hash sent passwordHash with saved serverSalt
    // Then compare new hash to stored hash
    passwordValidCheck = true;
  }

  if (!emailEmptyCheck) {
    message = { type: 'email', value: 'Enter an email.' };
  } else if (!emailValidCheck) {
    message = { type: 'email', value: 'Enter a valid email.' };
  } else if (!passwordEmptyCheck) {
    message = { type: 'password', value: 'Enter a password.' };
  } else if (!passwordValidCheck) {
    message = { type: 'password', value: 'Incorrect password or email.' };
  }

  const result = emailEmptyCheck && emailValidCheck && passwordEmptyCheck && passwordValidCheck;

  return { result, message };
};
