import * as React from 'react';
import MapView, { MapStyleElement, PROVIDER_GOOGLE } from 'react-native-maps';
import CreateButton from '../components/CreateButton';

interface IMapScreenProps {}

export default class MapScreen extends React.Component<IMapScreenProps> {
  public mapStyle: MapStyleElement[] = [
    {
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#1d2c4d'
        }
      ]
    },
    {
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#8ec3b9'
        }
      ]
    },
    {
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#1a3646'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'administrative.country',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#4b6878'
        }
      ]
    },
    {
      'featureType': 'administrative.land_parcel',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'administrative.land_parcel',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#64779e'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'simplified'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': 'simplified'
        }
      ]
    },
    {
      'featureType': 'administrative.province',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#4b6878'
        }
      ]
    },
    {
      'featureType': 'landscape.man_made',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#334e87'
        }
      ]
    },
    {
      'featureType': 'landscape.natural',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#023e58'
        }
      ]
    },
    {
      'featureType': 'poi',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#283d6a'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#6f9ba5'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#1d2c4d'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#023e58'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#3C7680'
        },
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#304a7d'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.icon',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#98a5be'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#1d2c4d'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#2c6675'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#255763'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#b0d5ce'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#023e58'
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'labels',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'transit',
      'stylers': [
        {
          'visibility': 'off'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#98a5be'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#1d2c4d'
        }
      ]
    },
    {
      'featureType': 'transit.line',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#283d6a'
        }
      ]
    },
    {
      'featureType': 'transit.station',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#3a4762'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#0e1626'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#4e6d70'
        }
      ]
    }
  ];
  private region: any = {
    latitude: 39.74966149999999,
    longitude: -105.0013654,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };
  public render(): JSX.Element {
    return (
      //default location is MM office, should prompt to use location
     <React.Fragment>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1, position:'absolute', top:0, left:0, right:0, bottom:0 }}
          region={this.region}
          customMapStyle={this.mapStyle}
          showsUserLocation={true}
        />
        <CreateButton style={{ position: 'absolute', top: 40, left: 20 }} />
      </React.Fragment>
    );
  }
}
