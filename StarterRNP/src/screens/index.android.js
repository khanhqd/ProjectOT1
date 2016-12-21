import { Navigation } from 'react-native-navigation';

import SideMenu from './SideMenu';
import Home from './Home';
import Database from './Database';
import MyCustomer from './MyCustomer';
import CustomerDetail from './CustomerDetail';
import HistoryScene from './HistoryScene';
import Checklist from './Checklist';
// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('screen.SideMenu', () => SideMenu);
  Navigation.registerComponent('screen.Home', () => Home);
  Navigation.registerComponent('screen.Database', () => Database);
  Navigation.registerComponent('screen.MyCustomer', () => MyCustomer);
  Navigation.registerComponent('screen.CustomerDetail', () => CustomerDetail);
  Navigation.registerComponent('screen.HistoryScene', () => HistoryScene);
  Navigation.registerComponent('screen.Checklist', () => Checklist);
}
