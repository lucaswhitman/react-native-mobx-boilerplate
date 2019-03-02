import { inject, observer } from 'mobx-react/native';
import React, { Component } from 'react';

import AuthenticatedNavigator from './AuthenticatedNavigator';
import OnboardingScreen from './OnboardingScreen';
import UnauthenticatedNavigator from './UnauthenticatedNavigator';

export interface IMainScreenProps {
  SessionStore?: any;
  CommonStore?: any;
}

@inject('SessionStore', 'CommonStore')
@observer
export default class MainScreen extends Component<IMainScreenProps> {
  public render(): JSX.Element {
    if(this.props.CommonStore.hasSeenOnboarding !== true) {
      return <OnboardingScreen />;
    } else if (this.props.SessionStore.isLoggedIn || this.props.SessionStore.hasValidToken()) {
      return <AuthenticatedNavigator />;
    } else {
      return <UnauthenticatedNavigator />;
    }
  }

}
