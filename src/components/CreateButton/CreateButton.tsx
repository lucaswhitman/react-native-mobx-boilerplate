import { inject, observer } from 'mobx-react/native';
import React, { Component } from 'react';
import {
    Alert,
    TouchableHighlight
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome5';

const myIcon = (<Icon name='plus-circle' size={72} color='#FFF' />);

export interface ICreateButtonProps {
  style?: any;
}

@inject('SessionStore', 'UserStore')
@observer
class CreateButton extends Component<ICreateButtonProps> {

  public render = () => {
    return (
      <TouchableHighlight
        style={localStyles.createButtonStyle}
        underlayColor='rgba(255, 255, 255, 0)'
        onPress={this.handleClick}
      >
        {myIcon}
      </TouchableHighlight>
    );
  }

  private handleClick(): void {
    Alert.alert('Button clicked...');
  }

}

EStyleSheet.build();

const localStyles = EStyleSheet.create({
  createButtonStyle: {
    position: 'absolute',
    left: '50% - 36',
    bottom: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 1
  }
});

export default CreateButton;
