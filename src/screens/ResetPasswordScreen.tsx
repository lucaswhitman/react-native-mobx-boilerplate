import { inject, observer } from 'mobx-react/native';
import React, { Component } from 'react';
import {
  ActivityIndicator,
  Button,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { translate } from '../i18n';
import styles from '../styles';

export interface IResetPasswordScreenProps {
  SessionStore?: any;
  navigation: NavigationScreenProp<any, any>;
}

@inject('SessionStore')
@observer
export default class ResetPasswordScreen extends Component<IResetPasswordScreenProps> {
  public render(): JSX.Element {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={[styles.heading, styles.headingOne]}
        >
          {translate('common.resetPassword')}
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder={translate('common.email')}
          autoCapitalize='none'
          onChangeText={(email) => this.props.SessionStore.setEmail(email)}
          autoFocus={true}
        />
        {!!this.props.SessionStore.error && (
          <Text
            style={styles.errorText}
          >
            {this.props.SessionStore.error}
          </Text>
        )}
        {this.props.SessionStore.inProgress && <ActivityIndicator />}
        <Button
          disabled={this.props.SessionStore.inProgress}
          onPress={() => this.props.SessionStore.resetPassword()}
          title={translate('common.resetPassword')}
        />
        <View style={{margin: 10}}/>
        <Button
          disabled={this.props.SessionStore.inProgress}
          onPress={() => this.props.navigation.navigate('Login')}
          title={translate('screens.resetPasswordScreen.returnToLogin')}
        />
      </ScrollView>
    );
  }
}
