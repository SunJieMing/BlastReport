import React, {
  View,
  Text,
  StyleSheet,
  Component,
  ScrollView,
  Dimensions,
  AsyncStorage
}                       from 'react-native';
import InputField       from '../../common/input_field';
import NumberInputField from '../../common/number_input';
import Button           from '../../common/button';
import API              from '../../../api';
import Firebase         from 'firebase';

export default class NewShotReport extends Component {
  constructor() {
    super();
    this.saveAndSubmit = this.saveAndSubmit.bind(this);

    this.state = {
      timestamp: null,
      blastingFirm: '',
      customer: '',
      shotLocation: '',
      totalTons: 0,
      totalBCY: 0,
      shotReportNumber: 0,
      weatherDescription: '',
      windSpeed: 0,
      temp: 0,
      burden: 0,
      spacing: 0,
      avgHoleDepth: 0,
      holeDiameter: 0,
      numHoles: 0,
      stemming: 0,
      productDescriptionIS: '',
      codeDateIS: '',
      quantityIS: 0,
      productDescriptionPE: '',
      codeDatePE: '',
      quantityPE: 0,
      anfo: 0,
      anPrills: 0,
      fuelOil: 0,
      oxidizerSolution: 0,
      otherBulk: 0,
      totalLbsShot: 0,
      powderFactor: 0,
      nearestStructureDistance: 0,
      nearestStructureDirection: '',
      maxLbsHole: 0,
      maxLbs8ms: 0,
      maxHoles8ms: 0,
      otherInfo: '',
      blasterInCharge: '',
      firstCrewMember: '',
      firstCrewHours: 0,
      secondCrewMember: '',
      secondCrewHours: 0,
      thirdCrewMember: '',
      thirdCrewHours: 0,
      signature: '',
      licenseNo: '',
      date: new Date()

    };
  }

  render() {
    return <View style={styles.container}>
      <View style={styles.header}>
        <Text>Blast Report</Text>
        <Button text={'Save and Submit'} onPress={this.saveAndSubmit} />
      </View>
      <ScrollView style={styles.body}>
        <InputField
          text={'Blasting Firm'}
          value={this.state.blastingFirm}
          onChangeText={(text) => this.setState({blastingFirm: text})}
          />
        <NumberInputField
          text={'Shot Report #'}
          value={this.state.shotReportNumber}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'shotReportNumber');
          }}
          />
        <InputField
          text={'Customer'}
          value={this.state.customer}
          onChangeText={(text) => this.setState({customer: text})}
          />
        <InputField
          text={'Shot Location'}
          value={this.state.shotLocation}
          onChangeText={(text) => this.setState({shotLocation: text})}
          />
        <NumberInputField
          text={'Total BCY'}
          value={this.state.totalBCY}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'totalBCY');
          }}
          />
        <NumberInputField
          text={'Total Tons'}
          value={this.state.totalTons}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'totalTons');
          }}
          />
        <InputField
          text={'Weather Description'}
          value={this.state.weatherDescription}
          onChangeText={(text) => this.setState({weatherDescription: text})}
          />
        <NumberInputField
          text={'Wind Speed (MPH)'}
          value={this.state.windSpeed}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'windSpeed');
          }}
          />
        <NumberInputField
          text={'Temperature (˚F)'}
          value={this.state.temp}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'temp');
          }}
          />
        <NumberInputField
          text={'Burden (Feet)'}
          value={this.state.burden}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'burden');
          }}
          />
        <NumberInputField
          text={'Spacing (Feet)'}
          value={this.state.spacing}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'spacing');
          }}
          />
        <NumberInputField
          text={'Avg Hole Depth (Feet)'}
          value={this.state.avgHoleDepth}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'avgHoleDepth');
          }}
          />
        <NumberInputField
          text={'Hole Diameter (Inches)'}
          value={this.state.holeDiameter}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'holeDiameter');
          }}
          />
        <NumberInputField
          text={'Number of Holes'}
          value={this.state.numHoles}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'numHoles');
          }}
          />
        <NumberInputField
          text={'Stemming (Feet)'}
          value={this.state.stemming}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'stemming');
          }}
          />

        <Text style={styles.sectionHeader}>
          Initiation System
        </Text>

        <InputField
          text={'Product Description'}
          value={this.state.productDescriptionIS}
          onChangeText={(text) => this.setState({productDescriptionIS: text})}
          />
        <InputField
          text={'Code Date'}
          value={this.state.codeDateIS}
          onChangeText={(text) => this.setState({codeDateIS: text})}
          />
        <NumberInputField
          text={'Quantity'}
          value={this.state.quantityIS}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'quantityIS');
          }}
          />

        <Text style={styles.sectionHeader}>
          Packaged Explosives
        </Text>

        <InputField
          text={'Product Description'}
          value={this.state.productDescriptionPE}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'productDescriptionPE');
          }}
          />
        <InputField
          text={'Code Date'}
          value={this.state.codeDatePE}
          onChangeText={(text) => this.setState({codeDatePE: text})}
          />
        <NumberInputField
          text={'Quantity'}
          value={this.state.quantityPE}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'quantityPE');
          }}
          />

        <Text style={styles.sectionHeader}>
          Bulk Blasting Agents
        </Text>

        <NumberInputField
          text={'ANFO (lbs)'}
          value={this.state.anfo}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'anfo');
          }}
          />
        <NumberInputField
          text={'AN Prills (lbs)'}
          value={this.state.anPrills}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'anPrills');
          }}
          />
        <NumberInputField
          text={'Fuel Oil (lbs)'}
          value={this.state.fuelOil}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'fuelOil');
          }}
          />
        <NumberInputField
          text={'Oxidizer Solution (lbs)'}
          value={this.state.oxidizerSolution}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'oxidizerSolution');
          }}
          />
        <NumberInputField
          text={'Other Bulk (lbs)'}
          value={this.state.otherBulk}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'otherBulk');
          }}
          />
        <NumberInputField
          text={'Total lbs in Shot'}
          value={this.state.totalLbsShot}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'totalLbsShot');
          }}
          />
        <NumberInputField
          text={'Powder Factor'}
          value={this.state.powderFactor}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'powderFactor');
          }}
          />
        <NumberInputField
          text={'Nearest Structure Distance (ft)'}
          value={this.state.nearestStructureDistance}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'nearestStructureDistance');
          }}
          />
        <InputField
          text={'Nearest Structure Direction'}
          value={this.state.codeDatePE}
          onChangeText={(text) => this.setState({codeDatePE: text})}
          />
        <NumberInputField
          text={'Max lbs/hole (lbs/hole)'}
          value={this.state.maxLbsHole}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'maxLbsHole');
          }}
          />
        <NumberInputField
          text={'Max lbs/8ms (lbs/hole)'}
          value={this.state.maxLbs8ms}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'maxLbs8ms');
          }}
          />
        <NumberInputField
          text={'Max holes/8ms (lbs/hole)'}
          value={this.state.maxHoles8ms}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'maxHoles8ms');
          }}
          />
        <InputField
          text={'Other Info'}
          value={this.state.otherInfo}
          onChangeText={(text) => this.setState({otherInfo: text})}
          />

        <Text style={styles.sectionHeader}>
          Crew
        </Text>

        <InputField
          text={'Blaster In Charge'}
          value={this.state.blasterInCharge}
          onChangeText={(text) => this.setState({blasterInCharge: text})}
          />
        <InputField
          text={'1st Crew Member'}
          value={this.state.firstCrewMember}
          onChangeText={(text) => this.setState({firstCrewMember: text})}
          />
        <NumberInputField
          text={'1st Crew Member Hours'}
          value={this.state.firstCrewHours}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'firstCrewHours');
          }}
          />
        <InputField
          text={'2nd Crew Member'}
          value={this.state.secondCrewMember}
          onChangeText={(text) => this.setState({secondCrewMember: text})}
          />
        <NumberInputField
          text={'2nd Crew Member Hours'}
          value={this.state.secondCrewHours}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'secondCrewHours');
          }}
          />
        <InputField
          text={'3rd Crew Member'}
          value={this.state.thirdCrewMember}
          onChangeText={(text) => this.setState({thirdCrewMember: text})}
          />
        <NumberInputField
          text={'3rd Crew Member Hours'}
          value={this.state.thirdCrewHours}
          onChangeNumber={(number) => {
            this.numberHandler(number, 'thirdCrewHours');
          }}
          />

        <Text style={styles.sectionHeader}>
          Date and Signature
        </Text>

        <InputField
          text={'Signature'}
          value={this.state.signature}
          onChangeText={(text) => this.setState({signature: text})}
          />
        <InputField
          text={'License Number'}
          value={this.state.licenseNo}
          onChangeText={(text) => this.setState({licenseNo: text})}
          />

      </ScrollView>
    </View>
  }

  saveAndSubmit() {
    this.setState({
      timestamp: new Date().getTime()
    });
    let ref = new Firebase('https://blaster-reports.firebaseio.com/users');
    AsyncStorage.getItem('userData', (error, userData) => {
      let data = JSON.parse(userData);
      let uid = data.auth ? data.auth.uid : data.uid;
      ref.child(uid).child('blastReports').push(this.state, (error) => {
        if (error) console.log('>>>error', error);
        this.props.navigator.pop();
      });
    });
  }

  numberHandler(str, prop) {
    let newState = {}
      , number = parseInt(str)
      ;
    newState[prop] = isNaN(number) ? 0 : number;
    this.setState(newState);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 2,
    backgroundColor: '#2BAAED',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 9,
    backgroundColor: '#EEEEF0'
  },
  sectionHeader: {
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10
  }
});
