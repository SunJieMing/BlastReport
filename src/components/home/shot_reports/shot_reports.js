import React, {
  View,
  Text,
  StyleSheet,
  Component,
  ScrollView
} from 'react-native';

import Row from '../../common/row';

export default class NewShotReportMenu extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return <View>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <ScrollView style={styles.body}>

      </ScrollView>
    </View>
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
    flex: 9,
    backgroundColor: '#EEEEF0'
  },
});
