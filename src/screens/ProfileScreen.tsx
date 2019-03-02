import { inject, observer } from 'mobx-react/native';
import React, { Component } from 'react';
import {
    Button,
    Image,
    ScrollView,
    Text
} from 'react-native';
import { translate } from '../i18n';
import styles from '../styles';

export const PROFILE_SCREEN_VIEW_MAIN = 'profileScreenViewMain';
export const PROFILE_SCREEN_TEXT_FIRSTNAME = 'profileScreenTextFirstname';

export interface IProfileScreenProps {
  SessionStore?: any;
  UserStore?: any;
}

@inject('SessionStore', 'UserStore')
@observer
export default class ProfileScreen extends Component<IProfileScreenProps> {

  public render(): JSX.Element {
    let firstName = '';
    let city = '';
    let state = '';
    try {
      firstName = this.props.UserStore.currentUser['first_name'];
      city = this.props.UserStore.currentUser['city'];
      state = this.props.UserStore.currentUser['state'];
    } catch (e) {
      console.log(e);
    }
    return (
      <ScrollView testID={PROFILE_SCREEN_VIEW_MAIN} contentContainerStyle={styles.container}>
        {this.renderImage()}
        <Text testID={PROFILE_SCREEN_TEXT_FIRSTNAME} style={[styles.heading, styles.headingOne]}>
          {firstName}
        </Text>
        <Text style={[styles.pText]}>
          {city}, {state}
        </Text>
        <Button
          onPress={() => this.props.SessionStore.logout()}
          title={translate('common.logOut')}
        />
      </ScrollView>
    );
  }

  private renderImage(): JSX.Element|undefined {
    let url = undefined;
    try {
      url = this.props.UserStore.currentUser['photos'][0]['urls']['full'];
    } catch (e) {
      console.log(e);
    }
    if(url !== undefined) {
      return (
        <Image
          style={styles.userThumb}
          source={{uri: url}}
        />
      );
    }
  }
}
