// import valid email function
import validateEmail from '../../utils/validate-email';

// import api constants
import constants from '../constants';

// require bcrypt package
const bcrypt = require('bcryptjs');

// function for getting the client salt from the server
export const getClientSalt = async (email) => {
  // fetch request for getting the salt
  const response = await fetch(constants.endpoint('get-client-salt'), {
    method: 'POST',
    headers: constants.headers,
    body: JSON.stringify({
      email,
    }),
  });

  // await the json response of the server
  const salt = await response.json();

  return salt;
};

// function for getting a new client salt from the server
export const newClientSalt = async (email) => {
  // fetch request for getting the salt
  const response = await fetch(constants.endpoint('new-client-salt'), {
    method: 'POST',
    headers: constants.headers,
    body: JSON.stringify({
      email,
    }),
  });

  // await the json response of the server
  const salt = await response.json();

  return salt;
};

// function for authorizing an email password pair for sign in
export const authSignIn = async (email, passwordHash, salt) => {
  // check email for validity
  const emailEmptyCheck = email !== '';
  const emailValidCheck = validateEmail(email) !== null;

  let passwordEmptyCheck = false;
  let passwordValidCheck = false;

  if (emailEmptyCheck && emailValidCheck) {
    try {
      // hashing empty string for checking empty password
      const emptyHash = await bcrypt.hash('', salt);

      // checking for empty password
      passwordEmptyCheck = passwordHash !== emptyHash;

      // fetch request for authorizing the sign in
      const response = await fetch(constants.endpoint('sign-in'), {
        method: 'POST',
        headers: constants.headers,
        body: JSON.stringify({
          email,
          password: passwordHash,
        }),
      });

      // await the json response of the server
      const result = await response.json();

      if (result.result) {
        // set the password valid if sign in result is true
        passwordValidCheck = true;
      }
    } catch (error) {
      // do nothing if error
      // this may happen if email password pair is invalid
    }
  }

  // set the response message and result
  let message = { type: 'login', value: 'Login successful.' };

  if (!emailEmptyCheck) {
    message = { type: 'email', value: 'Enter an email.' };
  } else if (!emailValidCheck) {
    message = { type: 'email', value: 'Enter a valid email.' };
  } else if (!passwordEmptyCheck) {
    message = { type: 'password', value: 'Enter a password.' };
  } else if (!passwordValidCheck) {
    message = { type: 'both', value: 'Incorrect email or password.' };
  }

  const result = emailEmptyCheck && emailValidCheck && passwordEmptyCheck && passwordValidCheck;

  return { result, message };
};

// function for authorizing an email password pair for sign up
export const authSignUp = async (email, passwordHash, passwordHash1, salt) => {
  // check email for validity
  const emailEmptyCheck = email !== '';
  const emailValidCheck = validateEmail(email) !== null;

  // checking for matching passwords
  const passwordNotSameCheck = passwordHash === passwordHash1;

  let passwordEmptyCheck = false;
  let passwordValidCheck = false;

  if (emailEmptyCheck && emailValidCheck && passwordNotSameCheck) {
    try {
      // hashing empty string for checking empty password
      // const emptyHash = bcrypt.hashSync('', salt);
      const emptyHash = await bcrypt.hash('', salt);

      // checking for empty password
      passwordEmptyCheck = passwordHash !== emptyHash;

      // fetch request for authorizing the sign up
      const response = await fetch(constants.endpoint('sign-up'), {
        method: 'POST',
        headers: constants.headers,
        body: JSON.stringify({
          email,
          password: passwordHash,
        }),
      });

      // await the json response of the server
      const result = await response.json();

      if (result.result) {
        // set the password valid if sign in result is true
        passwordValidCheck = true;
      }
    } catch (error) {
      // do nothing if error
      // this may happen if email is already used
    }
  }

  // set the response message and result
  let message = { type: 'login', value: 'Login successful.' };

  if (!emailEmptyCheck) {
    message = { type: 'email', value: 'Enter an email.' };
  } else if (!emailValidCheck) {
    message = { type: 'email', value: 'Enter a valid email.' };
  } else if (!passwordNotSameCheck) {
    message = { type: 'password', value: 'Passwords do not match.' };
  } else if (!passwordEmptyCheck) {
    message = { type: 'password', value: 'Enter a password.' };
  } else if (!passwordValidCheck) {
    message = { type: 'email', value: 'Email already has an account.' };
  }

  const result = emailEmptyCheck
                 && emailValidCheck
                 && passwordNotSameCheck
                 && passwordEmptyCheck
                 && passwordValidCheck;

  return { result, message };
};
