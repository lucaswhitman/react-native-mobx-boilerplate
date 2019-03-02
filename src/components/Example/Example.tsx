import { inject, observer } from 'mobx-react/native';
import React, { Component } from 'react';
import { View } from 'react-native';

export interface IExampleProps {
    SessionStore?: any;
    UserStore?: any;
  }

@inject('SessionStore', 'UserStore')
@observer

class Example extends Component<IExampleProps> {
  public render(): JSX.Element {
    return (<View />);
  }
}

export default Example;
