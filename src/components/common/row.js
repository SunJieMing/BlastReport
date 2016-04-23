import React, {
  Component,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

export default class Row extends Component {
  constructor() {
    super();
  }

  render() {
    return <TouchableHighlight
      style={styles.row}
      underlayColor={'gray'}
      onPress={this.props.onPress}
      >
      <Text style={styles.buttonText}>{this.props.text}</Text>
    </TouchableHighlight>
  }
}

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    backgroundColor: '#FFFFFF',
    marginBottom: 15
  },
  buttonText: {
    fontSize: 20
  }
});
