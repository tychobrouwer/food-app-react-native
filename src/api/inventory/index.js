import constants from '../constants';

export const getUserGroups = async (userID, passwordHash) => {
  try {
    // fetch request for getting the user groups
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
      return JSON.parse(result.data);
    }

    return [];
  } catch (error) {
    return [];
  }
};

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

    console.log(result);

    if (result.result) {
      return JSON.parse(result.newInventory);
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
      return JSON.parse(result.inventory);
    }

    return false;
  } catch (error) {
    return false;
  }
};
