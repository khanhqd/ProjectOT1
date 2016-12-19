import { Navigation } from 'react-native-navigation';

import SideMenu from './SideMenu';
import Home from './Home';
import Database from './Database';
// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('screen.SideMenu', () => SideMenu);
  Navigation.registerComponent('screen.Home', () => Home);
  Navigation.registerComponent('screen.Database', () => Database);
}
