import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ListView,
  Dimensions,
  Image
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Card } from './common';
const { width } = Dimensions.get('window');
const moment = require('moment');

const data = [
  { dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  { dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  { dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  { dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  { dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  { dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  { dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  { dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' },
  { dateOfEvent: '11/12/1995', customerName: 'Nguyen Van A', phonenumber: '01292844648', status: 'Resolved' }
];

export default class HistoryScene extends Component {
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
    this.state = {
          dataSource: ds.cloneWithRows(data),
          dateFrom: moment().subtract(1, 'days').toDate(),
          dateTo: new Date(),
          date: new Date()
        };
        this._renderRow = this._renderRow.bind(this);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
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
                  <Text style={styles.text}>{data.dateOfEvent}</Text>
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
  search(){
    Alert.alert("Find")
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginTop: 10, alignSelf: 'center', width:width-20}}>
        <View style={{flexDirection:'row', alignSelf:'center', alignItems:'center', justifyContent:'space-around', marginBottom:5, backgroundColor:'white', borderColor:0.5, borderRadius:10, elevation:1, width:width-15,height: 54}}>
          <DatePicker
                style={{width: 140, height: 50, marginBottom:7, marginTop: 10}}
                mode="date"
                date={this.state.dateFrom}
                duration={300}
                maxDate= {this.state.date}
                placeholder="Từ ngày"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36,
                        backgroundColor: '#eee',
                        borderRadius: 5
                    }
                }}
                onDateChange={(dateFrom) => {this.setState({dateFrom: dateFrom})}}
                />
          <Image
            style={{width:25, height:25}}
            source={require('../../res/img/back-arrow.png')}
            />
          <DatePicker
                style={{width: 140, height: 50, marginBottom:7, marginTop: 10}}
                mode="date"
                date={this.state.dateTo}
                duration={300}
                placeholder="Đến ngày"
                format="YYYY-MM-DD"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36,
                        backgroundColor: '#eee',
                        borderRadius: 5
                    }
                }}
                onDateChange={(dateTo) => {this.setState({dateTo: dateTo})}}
                />
              <TouchableOpacity onPress={this.search.bind(this)} >
                <Image
                  style={{width:25, height:25}}
                  source={require('../../res/img/finder-icon.png')}
                  />
              </TouchableOpacity>

            </View>
              <View style={styles.firstRow}>
                  <View style={[styles.viewText,{flex: 2}]}>
                    <Text style={[styles.text,{fontWeight:'bold', color:'white', fontSize:16}]}>Time</Text>
                  </View>
                  <View style={[styles.viewText,{flex: 3}]}>
                    <Text style={[styles.text,{fontWeight:'bold', color:'white',fontSize:16}]}>Name</Text>
                  </View>
                  <View style={[styles.viewText,{flex: 3}]}>
                    <Text style={[styles.text,{fontWeight:'bold', color:'white',fontSize:16}]}>Phone</Text>
                  </View>
                  <View style={[styles.viewText,{flex: 2}]}>
                    <Text style={[styles.text,{fontWeight:'bold', color:'white',fontSize:16}]}>Status</Text>
                  </View>
              </View>
           <ListView
             dataSource={this.state.dataSource}
             renderRow={(data) => this._renderRow(data)}
           />
        </View>
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
    flex: 1
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
    backgroundColor: '#32B34E'
  }
})
