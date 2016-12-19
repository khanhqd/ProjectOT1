import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default class SideMenu extends Component {
  _toggleDrawer() {
    this.props.navigator.toggleDrawer({
      to: 'closed',
      side: 'left',
      animated: true
    });
  }
  
  render() {
    return (
      <ScrollView style={styles.drawerContainer}>
        <Image
          style={styles.drawerImageContainer}
          source={require('../../res/img/life_under_the_ocean-wide.jpg')}
          resizeMode='stretch'
        >
          <Image
            style={styles.avatarContainer}
            source={require('../../res/img/admin-Khanh.png')}
            resizeMode='stretch'
          />
            <View style={styles.profileContainer}>
              <Text style={styles.profileStyle}>Admin SuperSaler</Text>
            </View>
          </Image>
          <TouchableOpacity
            style={styles.navigateButton}
            onPress={() => this.navigateScence('home')}
          >
            <Image
              style={styles.navigateIcon}
              source={require('../../res/img/home-ixon.png')}
              resizeMode='contain'
            />
          <Text style={styles.navigateText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigateButton}
            onPress={() => this.navigateScence('database')}
          >
            <Image
              style={styles.navigateIcon}
              source={require('../../res/img/database.png')}
              resizeMode='contain'
            />
          <Text style={styles.navigateText}>Database</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigateButton}
            onPress={() => this.navigateScence('myCustomer')}
          >
            <Image
              style={styles.navigateIcon}
              source={require('../../res/img/mycustomer.png')}
              resizeMode='contain'
            />
          <Text style={styles.navigateText}>My Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigateButton}
            onPress={() => this.navigateScence('history')}
          >
            <Image
              style={styles.navigateIcon}
              source={require('../../res/img/history.png')}
              resizeMode='contain'
            />
          <Text style={styles.navigateText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigateButton}
            onPress={() => this.navigateScence('motivation')}
          >
            <Image
              style={styles.navigateIcon}
              source={require('../../res/img/motivation.png')}
              resizeMode='contain'
            />
          <Text style={styles.navigateText}>Motivation</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navigateButton}
            onPress={() => this.navigateScence('target')}
          >
            <Image
              style={styles.navigateIcon}
              source={require('../../res/img/target.png')}
              resizeMode='contain'
            />
          <Text style={styles.navigateText}>Target</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navigateButton}
            onPress={() => this.navigateScence('checklist')}
          >
            <Image
              style={styles.navigateIcon}
              source={require('../../res/img/check-list.png')}
              resizeMode='contain'
            />
          <Text style={styles.navigateText}>Check List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigateButton, { backgroundColor: '#6e7469' }]}
            onPress={() => this.navigateScence('socialRanking')}
          >
            <Image
              style={[styles.navigateIcon, { tintColor: '#eee' }]}
              source={require('../../res/img/social.png')}
              resizeMode='contain'
            />
          <Text style={[styles.navigateText, { color: '#eee' }]}>Social</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigateButton, { backgroundColor: '#6e7469' }]}
            onPress={() => this.navigateScence('socialBuy')}
          >
            <Image
              style={[styles.navigateIcon, { tintColor: '#eee' }]}
              source={require('../../res/img/buy.png')}
              resizeMode='contain'
            />
          <Text style={[styles.navigateText, { color: '#eee' }]}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.navigateButton, { backgroundColor: '#6e7469' }]}
            onPress={() => this.navigateScence('socialSell')}
          >
            <Image
              style={[styles.navigateIcon, { tintColor: '#eee' }]}
              source={require('../../res/img/sell.png')}
              resizeMode='contain'
            />
          <Text style={[styles.navigateText, { color: '#eee' }]}>Sell</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => this.navigateScence('logout')}
          >
            <Image
              style={styles.logoutIcon}
              source={require('../../res/img/logout.png')}
              resizeMode='contain'
            />
          <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    flexDirection: 'column',
    width: width*3/4
  },
  drawerImageContainer: {
    height: 200,
    width: null,
    justifyContent: 'space-around'
  },
  avatarContainer: {
    margin: 20,
    height: 100,
    width: 100,
    borderWidth: 4,
    borderColor: '#eee'
  },
  profileContainer: {
    margin: 20
  },
  profileStyle: {
    color: '#eee',
    fontSize: 25,
    fontWeight: '600'
  },
  navigateButton: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutButton: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#22993C',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigateText: {
    fontSize: 20,
    color: '#616161',
    flex: 6
  },
  logoutText: {
    fontSize: 20,
    color: '#eee',
    flex: 6
  },
  logoutIcon: {
    height: 30,
    width: 30,
    tintColor: '#eee',
    flex: 2
  },
  navigateIcon: {
    height: 30,
    width: 30,
    tintColor: '#616161',
    flex: 2
  },
});
