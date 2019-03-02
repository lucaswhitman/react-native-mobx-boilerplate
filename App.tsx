import { Provider } from 'mobx-react';
import React, { ReactNode } from 'react';
import { Component } from 'react';
import MainScreen from './src/screens/MainScreen';
import CommonStore from './src/stores/CommonStore';
import SessionStore from './src/stores/SessionStore';
import UserStore from './src/stores/UserStore';

const stores = {
  SessionStore,
  CommonStore,
  UserStore
};


interface IAppProps {}
export default class App extends Component<IAppProps> {
  public render(): ReactNode {
    return (
      <Provider {...stores}>
        <MainScreen />
      </Provider>
    );
  }
}
