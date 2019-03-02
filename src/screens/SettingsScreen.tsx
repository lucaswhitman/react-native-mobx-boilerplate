import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { translate } from '../i18n';
import styles from '../styles';

export const SETTINGS_SCREEN_VIEW_CONTAINER = 'SettingsScreenViewContainer';
export const SETTINGS_SCREEN_TEXT_1 = 'SettingsScreenText1';

interface ISettingsScreenProps {}

export default class SettingsScreen extends Component<ISettingsScreenProps> {
  public render(): JSX.Element {
    return (
      <View testID={SETTINGS_SCREEN_VIEW_CONTAINER} style={styles.container}>
        <Text testID={SETTINGS_SCREEN_TEXT_1}style={styles.heading}>
          {translate('common.settings')}
        </Text>
      </View>
    );
  }
}
