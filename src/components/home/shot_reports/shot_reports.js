import React, {
  View,
  Text,
  StyleSheet,
  Component,
  ScrollView,
  AsyncStorage
}          from 'react-native';
import Firebase from 'firebase';
import API from '../../../api';
import Row from '../../common/row';
import ShotReport from './shot_report';
import Header from '../../common/header';

const app = new Firebase('https://blaster-reports.firebaseio.com');

export default class ShotReports extends Component {
  constructor() {
    super();
    this.viewReport = this.viewReport.bind(this);
    this.state = {
      reports: []
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('userData', (error, userData) => {
      let data = JSON.parse(userData);
      API.getReports(`https://blaster-reports.firebaseio.com/users/${data.uid || data.auth.uid}.json`).then((response) => {
        let reports = [];
        for (var key in response.blastReports) {
          reports.push(response.blastReports[key]);
        }
        this.setState({ reports: reports });
      });
    });
  }

  render() {
    return <View>
      <Header text={'Reports'} back={() => { this.props.navigator.pop(); }} />
      <ScrollView style={styles.body} alwaysBounceVertical={false} >
        {this.state.reports.map((report, i) => {
          let time = new Date(report.timestamp);
          return <Row key={i} onPress={() => {this.viewReport(report, i)}} text={new Date(report.timestamp).toString()} />
        })}
      </ScrollView>
    </View>
  }

  viewReport(report, i) {
    this.props.navigator.push({
      name: 'shotReport',
      passProps: { report }
    });
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: '#2BAAED',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 1,
    height: 500,
    backgroundColor: '#EEEEF0'
  },
});
