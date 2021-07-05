import React, { Component } from 'react';
import Pharmacy from './PharmacyComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { MEDICATIONS } from '../shared/medicationlist';
import { MedicationInfo} from './MedicationInfoComponent';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medications: MEDICATIONS,
      selectedMedication: null
    }
  }

  onMedicationSelect(medicationId) {
    this.setState({selectedMedication: medicationId})
}

  render() {
      return (
          <div>
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Medication Reminder</NavbarBrand>
              </div>
              </Navbar>
              <Pharmacy medications={this.state.medications} onClick={medicationId => this.onMedicationSelect(medicationId)}/>
              <MedicationInfo medication={this.state.medications.filter(medication => medication.id === this.state.selectedMedication)[0]}/>
          </div>
      );
  }
}

export default Main;
