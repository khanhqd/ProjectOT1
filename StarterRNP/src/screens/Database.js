import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Picker,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import ActionButton from 'react-native-action-button';
import SendIntentAndroid from 'react-native-send-intent';
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firebaseApp } from '../app.js';
import { InfoBox, TitleBox, Input, Button2 } from './common';

const { height, width } = Dimensions.get('window');
const Item = Picker.Item;

let i = 1;

export default class Home extends Component {
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
    this.state = {
      diachi: '',
      content: '',
      plan: '',
      selected0: 'key0',
      date: moment().toDate(),
      name: '',
      id: '',
      phone: '',
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  componentWillMount() {
    firebaseApp.database().ref("/customers/" + "c"+i).once('value').then(function(snapshot) {
      const data = snapshot.val();
      this.setState({ name: data.name, id: data.id, phone: data.phone });
    }.bind(this));
  }
  onNavigatorEvent(event) {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
  }
  onValueChange(key, value) {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
  }
  call() {
    SendIntentAndroid.sendPhoneDial(this.state.phone);
  }
  backCustomer(){
    if (i === 1) { i = 5 }
    else {i--};
    firebaseApp.database().ref("/customers/" + "c"+i).once('value').then(function(snapshot) {
      var data = snapshot.val();
      this.setState({ name: data.name, id: data.id, phone: data.phone });
    }.bind(this));
  };

  nextCustomer(){
    if(i==5){ i = 1} else {i++};
    firebaseApp.database().ref("/customers/" + "c"+i).once('value').then(function(snapshot) {
      const data = snapshot.val();
      this.setState({ name: data.name, id: data.id, phone: data.phone });
    }.bind(this));
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView >
        <View style={{ flexDirection: 'row', width: width }}>
          <View style={{ flex: 1 }}>
              <InfoBox title='ID:' content={this.state.id} />
              <InfoBox title='Name:' content={this.state.name} />
              <InfoBox title='Phone Number:' content={this.state.phone} />
          </View>
          <View style={{ flex: 1 }}>
              <InfoBox title='Address:' content='612 La Thành - Hà Nội' />
              <InfoBox title='Email:' content='khanhqd.neu@gmail' />
              <InfoBox title='DoB:' content='11.22.1989' />
          </View>
        </View>
        <InfoBox title='Saler:' content='Quách Khánh' />
        <TitleBox title='Status:'>
          <Picker
              style={styles.picker}
              selectedValue={this.state.selected0}
              onValueChange={this.onValueChange.bind(this, 'selected0')}
          >
              <Item label="Chưa xử lý" value="key0" />
              <Item label="Gọi không thành công" value="key1" />
              <Item label="Đã hẹn" value="key2" />
              <Item label="Đã gặp trực tiếp" value="key3" />
          </Picker>
        </TitleBox>
        <Input
          title='Call Content:'
          placeholder='Nội dung cuộc gọi...'
          value={this.state.content}
          onChangeText={(content) => this.setState({ content })}
        />
        <Input
          title='Plan for next call:'
          placeholder='Kế hoạch cho lần gọi tới...'
          onChangeText={(plan) => this.setState({ plan })}
          value={this.state.plan}
        />
        <TitleBox title="Alarm to call again:">
          <DatePicker
            style={{ width: 200, height: 50, marginBottom: 7, alignSelf: 'center', marginTop: 10 }}
            mode="datetime"
            date={this.state.date}
            duration={300}
            format="YYYY-MM-DD, hh-mm"
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
            onDateChange={(date) => { this.setState({ date: date }); }}
          />
          </TitleBox>
      </ScrollView>
      <ActionButton buttonColor="#32B34E">
        <ActionButton.Item buttonColor="#32B34E" onPress={() => this.call()}>
          <Icon name="phone" size={30} />
        </ActionButton.Item>
      </ActionButton>
      <View style={styles.button1}>
        <Button2
          title='BACK'
          onPress={() => { this.backCustomer(); }}
        />
        <Button2
          title='NEXT'
          onPress={() => { this.nextCustomer(); }}
        />
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button1: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 3,
    justifyContent: 'space-around',
    backgroundColor: '#CACACA'
  }
});
