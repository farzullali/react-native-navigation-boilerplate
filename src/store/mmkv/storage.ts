import { MMKV } from 'react-native-mmkv';
import { Storage } from 'redux-persist';
import { StorageError } from '../../types/store/errors.type';

class MMKVStorage implements Storage {
  private storage: MMKV;

  constructor() {
    this.storage = new MMKV();
  }

  async setItem(key: string, value: string): Promise<void> {
    try {
      this.storage.set(key, value);
    } catch (error) {
      this.handleError('setItem', key, error);
    }
  }

  async getItem(key: string): Promise<string | null> {
    try {
      return this.storage.getString(key) || null;
    } catch (error) {
      this.handleError('getItem', key, error);
    }
  }

  async removeItem(key: string): Promise<void> {
    try {
      this.storage.delete(key);
    } catch (error) {
      this.handleError('removeItem', key, error);
    }
  }

  private handleError(operation: string, key: string, error: unknown): never {
    throw new StorageError(
      `Storage ${operation} failed for key: ${key}`,
      error instanceof Error ? error.message : 'Unknown error'
    );
  }
}

export const storage = new MMKVStorage();

export const TokenKeys = {
  ACCESS_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'auth_refresh_token',
} as const;

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // Only persist auth state
};

export const getToken = () => storage.getItem(TokenKeys.ACCESS_TOKEN);
export const getRefreshToken = () => storage.getItem(TokenKeys.REFRESH_TOKEN);

export const setTokens = (token: string, refreshToken: string) => {
  storage.setItem(TokenKeys.ACCESS_TOKEN, token);
  storage.setItem(TokenKeys.REFRESH_TOKEN, refreshToken);
};

export const clearTokens = () => {
  storage.removeItem(TokenKeys.ACCESS_TOKEN);
  storage.removeItem(TokenKeys.REFRESH_TOKEN);
};