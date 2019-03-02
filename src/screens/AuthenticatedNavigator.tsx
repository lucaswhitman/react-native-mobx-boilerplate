import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { translate } from '../i18n';
import DeveloperOptionsScreen from './DeveloperOptionsScreen';
import ExperimentalTabNavigator from './experimental/ExperimentalTabNavigator';
import ProfileScreen from './ProfileScreen'; //Stack Nav
import SettingsScreen from './SettingsScreen';  //Tab Nav

const Navigator = createBottomTabNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      title: translate('navigators.authenticatedNavigator.me'),
      tabBarIcon: ({ tintColor }: { tintColor: string }) => (
        <Icon
          name='user-circle'
          size={17}
          color={tintColor}
        />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      title: translate('common.settings'),
      tabBarIcon: ({ tintColor }: { tintColor: string }) => (
        <Icon
          name='door-open'
          size={17}
          color={tintColor}
        />
      )
    }
  },
  Experimental: {
    screen: ExperimentalTabNavigator,
    navigationOptions: {
      title: translate('navigators.authenticatedNavigator.experimental'),
      tabBarIcon: ({ tintColor }: { tintColor: string }) => (
        <Icon
          name='flask'
          size={17}
          color={tintColor}
        />
      )
    }
  },
  DeveloperOptions: {
    screen: DeveloperOptionsScreen,
    navigationOptions: {
      title: translate('navigators.authenticatedNavigator.developerOptions'),
      tabBarIcon: ({ tintColor }: { tintColor: string }) => (
        <Icon
          name='cogs'
          size={17}
          color={tintColor}
        />
      )
    }
  }
});


const AuthenticatedNavigator = createAppContainer(Navigator);

export default AuthenticatedNavigator;
