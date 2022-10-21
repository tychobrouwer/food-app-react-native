import constants from '../constants';

export const addToInventory = async (userID, passwordHash, groupID, itemData) => {
  try {
    // fetch request for adding an item to an inventory
    const response = await fetch(constants.endpoint('add-item'), {
      method: 'POST',
      headers: constants.headers,
      body: JSON.stringify({
        userID,
        password: passwordHash,
        groupID,
        itemData,
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

export const removeFromInventory = async (userID, passwordHash, groupID, itemID) => {
  try {
    // fetch request for adding an item to an inventory
    const response = await fetch(constants.endpoint('remove-item'), {
      method: 'POST',
      headers: constants.headers,
      body: JSON.stringify({
        userID,
        password: passwordHash,
        groupID,
        itemID,
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

export const getInventory = async (userID, passwordHash, groupID) => {
  try {
    // fetch request for adding an item to an inventory
    const response = await fetch(constants.endpoint('get-inventory'), {
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
