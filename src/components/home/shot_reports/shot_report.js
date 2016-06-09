import React, {
  View,
  Text,
  StyleSheet,
  Component,
  ScrollView,
  AsyncStorage
}          from 'react-native';
import Header from '../../common/header';

export default class ShotReport extends Component {
  constructor() {
    super();
  }

  static propTypes() {
    return {
      report: React.propTypes.object.isRequired
    };
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return <View>
      <Header text={'Blast Report'} back={this.goBack.bind(this)} />
      <Text>Blast Report</Text>
    </View>;
  }

}
