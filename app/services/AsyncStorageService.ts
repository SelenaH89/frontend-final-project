import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async (value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (error) {
    console.log(error);
  }
};

const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token !== null) {
      return token;
    }
  } catch (error) {
    console.log(error);
  }
  return null;
};

const removeToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (error) {
    console.log(error);
  }
};

export { getToken, removeToken, storeToken };
