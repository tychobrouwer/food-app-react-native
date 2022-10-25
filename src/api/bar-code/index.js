import constants from '../constants';

export const getBarCode = async (code) => {
  try {
    // fetch request for adding an item to an inventory
    const response = await fetch(constants.endpoint('get-bar-code'), {
      method: 'POST',
      headers: constants.headers,
      body: JSON.stringify({
        code,
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

export const addBarCode = async (code, name, quantity, quantityType) => {
  try {
    // fetch request for adding an item to an inventory
    const response = await fetch(constants.endpoint('add-bar-code'), {
      method: 'POST',
      headers: constants.headers,
      body: JSON.stringify({
        code,
        name,
        quantity,
        quantityType,
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
