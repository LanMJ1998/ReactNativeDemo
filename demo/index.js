
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './js/App';
import {name as appName} from './app.json';
/*import {AppStackNavigator} from './js/AppNavigators'
import {createAppContainer} from 'react-navigation';

const AppStackNavigatorContainer=createAppContainer(AppStackNavigator);*/
AppRegistry.registerComponent(appName, () => App);
