import * as SecureStore from 'expo-secure-store';

export async function secureStoreSet(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function secureStoreDelete(key) {
  await SecureStore.deleteItemAsync(key);
}

export async function secureStoreGet(key) {
  let result = await SecureStore.getItemAsync(key);

  if (result) {
    return result;
  } else {
    return false;
  }
}