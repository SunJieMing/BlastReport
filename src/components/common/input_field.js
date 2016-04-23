import React, {
  View,
  Text,
  TextInput,
  Component,
  StyleSheet,
  Dimensions
} from 'react-native';

export default class InputField extends Component {
  static propTypes() {
    return {
      value: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      onChangeText: React.PropTypes.func.isRequired
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
        />
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'row'
  },
  input: {
    flex: 0.8,
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: Dimensions.get('window').width * 0.8,
    alignSelf: 'center'
  },
  label: {
    fontSize: 12
  }
});
