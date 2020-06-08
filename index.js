/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import 'moment/locale/ja';

AppRegistry.registerComponent(appName, () => App);
