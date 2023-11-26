import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getToken,
  removeToken,
  storeToken,
} from '../services/AsyncStorageService';

// Mock AsyncStorage methods
jest.mock('@react-native-async-storage/async-storage');

describe('AsyncStorage Functions', () => {
  afterEach(() => {
    AsyncStorage.setItem.mockClear();
    AsyncStorage.getItem.mockClear();
    AsyncStorage.removeItem.mockClear();
  });

  it('should store a token', async () => {
    const token = 'yourTokenValue';

    await storeToken(token);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith('token', token);
  });

  it('should retrieve a stored token', async () => {
    const storedToken = 'yourStoredTokenValue';
    AsyncStorage.getItem.mockResolvedValue(storedToken);

    const token = await getToken();

    expect(token).toBe(storedToken);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('token');
  });

  it('should handle retrieving a null token', async () => {
    AsyncStorage.getItem.mockResolvedValue(null);

    const token = await getToken();

    expect(token).toBeNull();
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('token');
  });

  it('should remove a token', async () => {
    await removeToken();

    expect(AsyncStorage.removeItem).toHaveBeenCalledWith('token');
  });
});
