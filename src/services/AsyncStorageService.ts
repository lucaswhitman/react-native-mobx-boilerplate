import { AsyncStorage } from 'react-native';

export interface IAsyncStorageServiceProps {
  clearData(key: string): Promise<void>;
  storeData(key: string, value: string): Promise<void>;
  retrieveData(key: string): Promise<string|undefined>;
}

export default class AsyncStorageService implements IAsyncStorageServiceProps {
  public clearData = async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      //todo: replace with bugsnag
      console.warn(error);
    }
  }

  public storeData = async (key: string, value: any): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      //todo: replace with bugsnag
      console.warn(error);
    }
  }

  public retrieveData = async (key: string): Promise<any> => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        return JSON.parse(value);
      }
     } catch (error) {
       //todo: replace with bugsnag
      console.warn(error);
     }
  }
}
