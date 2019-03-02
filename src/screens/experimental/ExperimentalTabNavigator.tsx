import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { translate } from '../../i18n';
import AnimationsScreen from './AnimationsScreen';
import CanvasScreen from './CanvasScreen';
import ContactsScreen from './ContactsScreen';
import OtherScreen from './OtherScreen';

const ExperimentalTabs = createBottomTabNavigator({
  Contacts: {
    screen: ContactsScreen,
    navigationOptions: {
      title: translate('navigators.experimentalTabNavigator.contacts'),
      tabBarIcon: ({ tintColor }: { tintColor: string }) => (
        <Icon
          name='address-book'
          size={17}
          color={tintColor}
        />
      )
    }
  },
  Canvas: {
    screen: CanvasScreen,
    navigationOptions: {
      title: translate('navigators.experimentalTabNavigator.canvas'),
      tabBarIcon: ({ tintColor }: { tintColor: string }) => (
        <Icon
          name='paint-brush'
          size={17}
          color={tintColor}
        />
      )
    }
  },
  Animations: {
    screen: AnimationsScreen,
    navigationOptions: {
      title: translate('navigators.experimentalTabNavigator.animations'),
      tabBarIcon: ({ tintColor }: { tintColor: string }) => (
        <Icon
          name='dot-circle'
          size={17}
          color={tintColor}
        />
      )
    }
  },
  Other: {
    screen: OtherScreen,
    navigationOptions: {
      title: translate('navigators.experimentalTabNavigator.other'),
      tabBarIcon: ({ tintColor }: { tintColor: string }) => (
        <Icon
          name='question'
          size={17}
          color={tintColor}
        />
      )
    }
  }
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ ExperimentalTabs });
