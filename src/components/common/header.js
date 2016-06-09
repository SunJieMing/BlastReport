import React, {
  View,
  Text,
  StyleSheet,
  Component
} from 'react-native';

export default class Header extends Component {
  constructor() {
    super();
  }
  static propTypes() {
    return {
      text: React.propTypes.string.isRequired,
      back: React.propTypes.function
    };
  }
  back() {
    this.props.back();
  }
  render() {
    return <View style={styles.header}>
      <Text style={styles.backButton} onPress={this.back.bind(this)} >Back</Text>
      <Text style={styles.headerText} >{this.props.text}</Text>
    </View>
  }
}

const styles = StyleSheet.create({
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
    justifyContent: 'center',
    paddingTop: 20
  },
  backButton: {
    fontSize: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  }
});
