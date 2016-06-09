import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
}                        from 'react-native';
import Signin            from './components/authentication/signin';
import Signup            from './components/authentication/signup';
import Home              from './components/home/home';
import NewShotReport     from './components/home/new_shot_report/new_shot_report';
import ShotReports       from './components/home/shot_reports/shot_reports';
import ShotReport        from './components/home/shot_reports/shot_report';


const ROUTES = {
  signin: Signin,
  signup: Signup,
  home: Home,
  newShotReport: NewShotReport,
  shotReports: ShotReports,
  shotReport: ShotReport
};

export default class Main extends Component {
  constructor() {
    super();
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    let Component = ROUTES[route.name];
    return <Component route={route} {...route.passProps} navigator={navigator} />;
  }

  render() {
    return <Navigator
      style={styles.container}
      initialRoute={{name: 'signin'}}
      renderScene={this.renderScene}
      configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('BlastReport', () => BlastReport);
