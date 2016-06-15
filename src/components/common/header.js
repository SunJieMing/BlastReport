import React, {
  View,
  Text,
  StyleSheet,
  Component
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

  goToSettings() {
    this.props.navigator.push({name: 'settings'});
  }

  render() {
    return <View style={styles.toolbar}>
      <Text style={styles.toolbarButton} onPress={this.back.bind(this)} >Back</Text>
      <Text style={styles.toolbarTitle} >{this.props.text}</Text>
      <Text style={styles.toolbarButton} onPress={this.goToSettings.bind(this)} >
        <Icon name={'cog'} color={'black'} size={15} />
      </Text>
    </View>
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#2BAAED',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  toolbarButton: {
    width: 50,
    textAlign: 'center'
  },
  toolbarTitle: {
    color: '#DBFCFD',
    textAlign: 'center',
    fontWeight: 'bold',
    flex: 1
  }
});
