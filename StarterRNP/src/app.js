import firebase from 'firebase';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';


const firebaseConfig = {
  apiKey: 'AIzaSyBzAEg5ueNpcoXVg4WBnZEMV696twSH6bY',
  authDomain: 'supersalerr.firebaseapp.com',
  databaseURL: 'https://supersalerr.firebaseio.com',
  storageBucket: 'supersalerr.appspot.com',
  messagingSenderId: '267779110141'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

registerScreens();

// const createTabs = () => {
//   let tabs = [
//     {
//       label: 'One',
//       screen: 'example.FirstTabScreen',
//       icon: require('../img/one.png'),
//       selectedIcon: require('../img/one_selected.png'),
//       title: 'Screen One'
//     },
//     {
//       label: 'Two',
//       screen: 'example.SecondTabScreen',
//       icon: require('../img/two.png'),
//       selectedIcon: require('../img/two_selected.png'),
//       title: 'Screen Two',
//       navigatorStyle: {
//         tabBarBackgroundColor: '#4dbce9',
//       }
//     }
//   ];
//   if (Platform.OS === 'android') {
//     tabs.push({
//       label: 'Collapsing',
//       screen: 'example.CollapsingTopBarScreen',
//       icon: require('../img/one.png'),
//       title: 'Collapsing',
//     });
//   }
//   return tabs;
// };
// // // this will start our app
// // Navigation.startTabBasedApp({
// //   tabs: createTabs(),
// //   appStyle: {
// //     tabBarBackgroundColor: '#0f2362',
// //     tabBarButtonColor: '#ffffff',
// //     tabBarSelectedButtonColor: '#63d7cc'
// //   },
// //   drawer: {
// //     left: {
// //       screen: 'example.SideMenu'
// //     }
// //   }
// // });
Navigation.startSingleScreenApp({
  screen: {
    screen: 'screen.Home',
    title: 'SuperSaler'
  },
   drawer: {
     left: {
      screen: 'screen.SideMenu'
    },
  }
});

module.exports.firebaseApp = firebaseApp;
