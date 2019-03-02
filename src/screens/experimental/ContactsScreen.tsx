import React, { Component } from 'react';
import {
  Button,
  FlatList,
  PermissionsAndroid,
  Platform,
  Text,
  View
} from 'react-native';
import Contacts, { Contact } from 'react-native-contacts';

import styles from '../../styles';

interface IState {
  contacts: Contact[];
}

interface IProps {}
export default class ContactsScreen extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { contacts: [] };
  }


  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Contacts
        </Text>
        <Button
          onPress={() => this.getContacts()}
          title='Get them contacts'
        />
        <FlatList
          data={this.state.contacts || undefined}
          keyExtractor={(item, index) => index.toString() + item}
          renderItem={({item}) => <Text>{item.givenName} {item.familyName}</Text>}
        />
      </View>
    );
  }

  private getContacts(): void {
    if(Platform.OS === 'ios') {
      Contacts.getAll((err, contacts) => {
        if (err) {
          throw err;
        }
        this.setState({contacts});
      });
    } else if (Platform.OS === 'android') {
      void PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          'title': 'Contacts',
          'message': 'This app would like to help you import your contacts.'
        }
      ).then(() => {
        Contacts.getAll((err, contacts) => {
          if (err) {
            throw err;
          }
          this.setState({contacts});
        });
      });
    }

  }
}
