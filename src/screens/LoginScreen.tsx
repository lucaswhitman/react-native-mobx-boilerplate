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

export interface ILoginScreenProps {
  SessionStore?: any;
  navigation: NavigationScreenProp<any, any>;
}

@inject('SessionStore')
@observer
export default class LoginScreen extends Component<ILoginScreenProps> {
  public render(): JSX.Element {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={[styles.heading, styles.headingOne]}
        >
          {translate('common.login')}
        </Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize='none'
          placeholder={translate('common.email')}
          onChangeText={(email) => this.props.SessionStore.setEmail(email)}
          autoFocus={true}
        />
        <TextInput
          style={[styles.textInput, styles.lastTextInput]}
          placeholder={translate('common.password')}
          onChangeText={(password) => this.props.SessionStore.setPassword(password)}
          secureTextEntry={true}
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
          onPress={() => this.props.SessionStore.login()}
          title={translate('common.logIn')}
        />
        <View style={{margin: 10}}/>
        <Button
          disabled={this.props.SessionStore.inProgress}
          onPress={() => this.props.navigation.navigate('ResetPassword')}
          title={translate('common.resetPassword')}
        />
      </ScrollView>
    );
  }
}
