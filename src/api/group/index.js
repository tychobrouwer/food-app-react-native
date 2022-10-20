import constants from '../constants';

export const addToGroup = async (userID, passwordHash, groupID, emailToAdd) => {
  try {
    // fetch request for adding an item to an inventory
    const response = await fetch(constants.endpoint('add-to-group'), {
      method: 'POST',
      headers: constants.headers,
      body: JSON.stringify({
        userID,
        password: passwordHash,
        groupID,
        emailToAdd,
      }),
    });

    // await the json response of the server
    const result = await response.json();

    console.log(result);

    if (result.result) {
      return result;
    }

    return false;
  } catch (error) {
    return false;
  }
};

export const getGroupUsers = async (userID, passwordHash, groupID) => {
  try {
    // fetch request for adding an item to an inventory
    const response = await fetch(constants.endpoint('get-group-users'), {
      method: 'POST',
      headers: constants.headers,
      body: JSON.stringify({
        userID,
        password: passwordHash,
        groupID,
      }),
    });

    // await the json response of the server
    const result = await response.json();

    if (result.result) {
      return result;
    }

    return false;
  } catch (error) {
    return false;
  }
};

export const getGroups = async (userID, passwordHash) => {
  try {
    // fetch request for adding an item to an inventory
    const response = await fetch(constants.endpoint('get-groups'), {
      method: 'POST',
      headers: constants.headers,
      body: JSON.stringify({
        userID,
        password: passwordHash,
      }),
    });

    // await the json response of the server
    const result = await response.json();

    if (result.result) {
      return result;
    }

    return false;
  } catch (error) {
    return false;
  }
};

export const createGroup = async (userID, passwordHash) => {
  try {
    // fetch request for adding an item to an inventory
    const response = await fetch(constants.endpoint('create-group'), {
      method: 'POST',
      headers: constants.headers,
      body: JSON.stringify({
        userID,
        password: passwordHash,
      }),
    });

    // await the json response of the server
    const result = await response.json();

    if (result.result) {
      return result;
    }

    return false;
  } catch (error) {
    return false;
  }
};
