import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen'; //Stack Nav
import ResetPasswordScreen from './ResetPasswordScreen';

const Navigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen
  },
  ResetPassword: {
    screen: ResetPasswordScreen
  }
});

const UnauthenticatedNavigator = createAppContainer(Navigator);

export default UnauthenticatedNavigator;
