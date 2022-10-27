import constants from '../constants';

export const searchIngredientRecipe = async (ingredients) => {
  try {
    // fetch request for adding an item to an inventory
    const response = await fetch(constants.endpoint('search-ingredient-recipes'), {
      method: 'POST',
      headers: constants.headers,
      body: JSON.stringify({
        ingredients,
        limit: 10,
      }),
    });

    // await the json response of the server
    const result = await response.json();

    return result;
  } catch (error) {
    return false;
  }
};

export const searchRecipe = async (name) => {
  try {
    // fetch request for adding an item to an inventory
    const response = await fetch(constants.endpoint('search-recipes'), {
      method: 'POST',
      headers: constants.headers,
      body: JSON.stringify({
        name,
      }),
    });

    // await the json response of the server
    const result = await response.json();

    return result;
  } catch (error) {
    return false;
  }
};
