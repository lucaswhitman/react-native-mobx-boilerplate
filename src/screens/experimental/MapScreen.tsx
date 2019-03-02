import React, { Component } from 'react';
import MapView from 'react-native-maps';

export default class MapScreen extends Component {
  public render(): JSX.Element {
    return (
      //default location is MM office, should prompt to use location
      <React.Fragment>
        <MapView
          style={{flex: 1}}
          region={{
            latitude: 39.74966149999999,
            longitude: -105.0013654,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}
        />
      </React.Fragment>
    );
  }
}
