import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TextInput,
  AsyncStorage
}                    from 'react-native';
import GiftedSpinner from 'react-native-gifted-spinner';
import Firebase      from 'firebase';
import Button        from '../common/button';

const app = new Firebase('https://blaster-reports.firebaseio.com');

export default class Signup extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.returnToSignin = this.returnToSignin.bind(this);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    };
  }

  render() {
    return <View style={styles.container}>
      <Text>Sign Up</Text>
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
      <Button text={'Sign In'} onPress={this.returnToSignin} />
      <Button text={'Submit'} onPress={this.onSubmit} />
    </View>
  }

  returnToSignin() {
    this.props.navigator.pop();
  }

  onSubmit() {
    app.createUser({
      'email': this.state.email,
      'password': this.state.password
    }, (error, userData) => {
      if (error) {
        switch(error.code) {
          case "EMAIL_TAKEN":
            alert("The new user account cannot be created because the email is already in use.");
          break;
          case "INVALID_EMAIL":
            alert("The specified email is not a valid email.");
          break;
          default:
            alert("Error creating user:");
        }
      } else {
        AsyncStorage.setItem('userData', JSON.stringify(userData));
        app.child('/users').child(userData.uid).set({
          email: this.state.email
        });
        this.props.navigator.immediatelyResetRouteStack([{ name: 'home' }]);
      }
    });
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
