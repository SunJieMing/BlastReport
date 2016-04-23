import React, {
  View,
  Text,
  TextInput,
  Component,
  StyleSheet,
  Dimensions
} from 'react-native';

export default class NumberInputField extends Component {
  static propTypes() {
    return {
      value: React.PropTypes.number.isRequired,
      text: React.PropTypes.string.isRequired,
      onChangeNumber: React.PropTypes.func.isRequired
    }
  }
  constructor() {
    super();
  }

  render() {
    return <View style={styles.container}>
      <Text style={styles.label}>
        {this.props.text}:
      </Text>
      <TextInput
        style={styles.input}
        value={this.props.value}
        onChangeText={this.props.onChangeText}
        keyboardType={'numeric'}
        />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: Dimensions.get('window').width * 0.3,
    alignSelf: 'center'
  },
  label: {
    fontSize: 12,
    paddingLeft: Dimensions.get('window').width * 0.1
  }
});
