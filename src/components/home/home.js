import React, {
  Component,
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';

import Row from '../common/row';

export default class Home extends Component {
  constructor() {
    super();
    this.createNewReport = this.createNewReport.bind(this);
    this.viewShotReports = this.viewShotReports.bind(this);
    this.state = {};
  }

  render() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.rowContainer}>
          <Row text={'Create Shot Report'} onPress={this.createNewReport} />
          <Row text={'View Shot Reports'} onPress={this.viewShotReports} />
        </View>
      </View>
    </View>
  }

  createNewReport() {
    this.props.navigator.push({name: 'newShotReport'});
  }

  viewShotReports() {
    this.props.navigator.push({name: 'shotReports'});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    color: '#DBFCFD',
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 2,
    backgroundColor: '#2BAAED',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 6,
    backgroundColor: '#EEEEF0'
  },
  rowContainer: {
    flex: 0.8,
    paddingTop: 35,
    justifyContent: 'flex-start'
  }
});
