// import library for secure storing data
import * as SecureStore from 'expo-secure-store';

// function for setting a key value pair
export async function secureStoreSet(key, value) {
  await SecureStore.setItemAsync(key, value);
}

// function for deleting a key's value
export async function secureStoreDelete(key) {
  await SecureStore.deleteItemAsync(key);
}

// function for getting a value
export async function secureStoreGet(key) {
  const result = await SecureStore.getItemAsync(key);

  if (result) {
    return result;
  }

  return false;
}
