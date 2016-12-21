import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  ListView,
  Dimensions,
  Image,
  TextInput
} from 'react-native';
import { firebaseApp } from '../app.js';
import { Card, CardSection, Input, Button2, InfoBox, TitleBox } from './common';

var {height, width} = Dimensions.get('window');

var data = [
  {id: 'CD1234', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {id: 'CD1234', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {id: 'CD1234', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  {id: 'CD1234', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
];

export default class MyCustomer extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }],
  };
  static navigatorStyle = {
    navBarBackgroundColor: '#336600',
    navBarTextColor: 'white',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    tabBarBackgroundColor: '#4dbce9',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ffff00'
  };
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    firebaseApp.database().ref("employee/" + "e1").once('value').then(function(snapshot) {
      var listCusId = snapshot.val().customers;
      console.log(listCusId);
    });
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
          dataSource: ds.cloneWithRows(data),
          finder:''
        };
        this._renderRow = this._renderRow.bind(this);
  }
  onNavigatorEvent(event) {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
  }
  _goToDetail() {
    this.props.navigator.push({
      title: 'CustomerDetail',
      screen: 'screen.CustomerDetail',
    });
  }
  _renderRow(data) {
      return (

          <Card>
                <TouchableOpacity
                  onPress={() => this._goToDetail()}
                  style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignItems: 'center', borderBottomWidth: 1, borderColor: '#CFD8DC'}}>
                  <View style={[styles.viewText,{flex: 2}]}>
                    <Text style={styles.text}>{data.id}</Text>
                  </View>
                  <View style={[styles.viewText,{flex: 3}]}>
                    <Text style={styles.text}>{data.customerName}</Text>
                  </View>
                  <View style={[styles.viewText,{flex: 3}]}>
                    <Text style={styles.text}>{data.phonenumber}</Text>
                  </View>
                  <View style={[styles.viewText,{flex: 2}]}>
                    <Text style={styles.text}>{data.status}</Text>
                  </View>
                </TouchableOpacity>
          </Card>

      );
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 10, marginBottom:10,alignSelf: 'center', width:width-20}}>
            <View style={styles.searchbar}>
                <Image
                  style={{width:25, height:25}}
                  source={require('../../res/img/finder-icon.png')}
                  />
                <TextInput
                  placeholder="Nhập số điện thoại..."
                  style={styles.input}
                  value={this.state.finder}
                  onChangeText={(finder) => this.setState({finder})}/>
            </View>
            </View>
              <View style={styles.firstRow}>
                  <View style={[styles.viewText,{flex: 2}]}>
                    <Text style={[styles.text,{fontWeight:'bold', color:'white', fontSize:16}]}>Mã</Text>
                  </View>
                  <View style={[styles.viewText,{flex: 3}]}>
                    <Text style={[styles.text,{fontWeight:'bold', color:'white',fontSize:16}]}>Tên</Text>
                  </View>
                  <View style={[styles.viewText,{flex: 3}]}>
                    <Text style={[styles.text,{fontWeight:'bold', color:'white',fontSize:16}]}>SĐT</Text>
                  </View>
                  <View style={[styles.viewText,{flex: 2}]}>
                    <Text style={[styles.text,{fontWeight:'bold', color:'white',fontSize:16}]}>Tình trạng</Text>
                  </View>
              </View>
           <ListView
             dataSource={this.state.dataSource}
             renderRow={(data) => this._renderRow(data)}
           />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewText: {
    height:40,
    borderWidth:0.25,
    borderColor:'grey',
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    padding: 3,
    fontSize: 14,
  },
  container:{
    backgroundColor: '#CACACA',
    flex: 1,
  },
  firstRow:{
    marginLeft: 5,
    marginRight:5,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#CFD8DC',
    backgroundColor: '#32B34E',
    elevation:2
  },
  input: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize:15,
    lineHeight:17,
    width: width-60
  },
  searchbar:{
  backgroundColor:'white',
  borderRadius:10,
  height:45,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  borderColor:'grey',
  elevation:2
  }
})
