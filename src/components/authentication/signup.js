import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import Button from '../common/button';

export default class Signup extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.returnToSignin = this.returnToSignin.bind(this);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  render() {
    return <View style={styles.container}>
      <Text>Sign Up</Text>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={this.state.username}
        onChangeText={(text) => this.setState({username: text})}
        />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={this.state.email}
        onChangeText={(text) => this.setState({email: text})}
        />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={this.state.password}
        onChangeText={(text) => this.setState({password: text})}
        />
      <Text style={styles.label}>Confirm Password:</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={this.state.passwordConfirmation}
        onChangeText={(text) => this.setState({passwordConfirmation: text})}
        />
      <Button text={'I already have an account...'} onPress={this.returnToSignin} />
      <Button text={'Submit'} onPress={this.onSubmit} />
    </View>
  }

  returnToSignin() {
    this.props.navigator.pop();
  }

  onSubmit() {
    this.props.navigator.immediatelyResetRouteStack([{ name: 'home' }]);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  label: {
    fontSize: 18
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  }
});
