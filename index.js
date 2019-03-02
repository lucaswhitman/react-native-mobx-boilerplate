/** @format */

import {AppRegistry} from 'react-native';
import { Client } from 'bugsnag-react-native';
import Config from 'react-native-config';
import App from './App';
import {name as appName} from './app.json';

window.bugsnag = new Client(Config.BUGSNAG_API_KEY);
AppRegistry.registerComponent(appName, () => App);
