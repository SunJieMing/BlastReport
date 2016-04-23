import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

import Button from '../common/button';

export default class Signin extends Component {
  constructor() {
    super();
    this.onSignin = this.onSignin.bind(this);
    this.onSignup = this.onSignup.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    return <View style={styles.container}>
      <Text>Sign In</Text>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        style={styles.input}
        value={this.state.username}
        onChangeText={(text) => this.setState({username: text})}
        />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={this.state.password}
        onChangeText={(text) => this.setState({password: text})}
        />
      <Button text={'Sign In'} onPress={this.onSignin} />
      <Button text={'Sign Up'} onPress={this.onSignup} />
    </View>
  }
  onSignin() {
    //login user and change view
    this.props.navigator.immediatelyResetRouteStack([{ name: 'home' }]);
  }
  onSignup() {
    this.props.navigator.push({name: 'signup'});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  label: {
    fontSize: 18
  }
});
