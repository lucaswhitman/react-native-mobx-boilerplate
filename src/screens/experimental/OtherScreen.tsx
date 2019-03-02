import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { translate } from '../../i18n';
import styles from '../../styles';


export default class OtherScreen extends Component {
  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          {translate('screens.otherScreen.mainText')}
        </Text>
      </View>
    );
  }
}
