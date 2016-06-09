import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage
}                    from 'react-native';
import Firebase      from 'firebase';
import GiftedSpinner from 'react-native-gifted-spinner';
import Button        from '../common/button';

const app = new Firebase('https://blaster-reports.firebaseio.com');

export default class Signin extends Component {
  constructor() {
    super();
    this.onSignin = this.onSignin.bind(this);
    this.onSignup = this.onSignup.bind(this);
    this.state = {
      loaded: true,
      email: 'benn@ifit.com',
      password: 'admin'
    };
  }
  render() {
    return <View style={styles.container}>
      <Text>Sign In</Text>
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
      <Button text={'Sign In'} onPress={this.onSignin} />
      <Button text={'Sign Up'} onPress={this.onSignup} />
    </View>
  }
  onSignin() {
    app.authWithPassword({
      'email': this.state.email,
      'password': this.state.password
    }, (error, userData) => {
      if (error) {
        alert(error);
      } else {
        AsyncStorage.setItem('userData', JSON.stringify(userData));
        this.props.navigator.immediatelyResetRouteStack([{ name: 'home' }]);
      }
    });
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
