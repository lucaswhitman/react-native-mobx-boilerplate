import React, { Component } from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import { translate } from '../i18n';
import CommonStore from '../stores/CommonStore';
import styles from '../styles';


export default class DeveloperOptionsScreen extends Component {
  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          {translate('screens.developerOptionsScreen.mainText')}
        </Text>
        <Button
          onPress={() => this.resetOnboarding()}
          title={translate('screens.developerOptionsScreen.resetOnboarding')}
        />
      </View>
    );
  }

  private resetOnboarding(): void {
    CommonStore.setHasSeenOnboarding(false);
  }
}
