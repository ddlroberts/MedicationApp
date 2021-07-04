import React, { Component } from 'react';
import Pharmacy from './components/PharmacyComponent';
import { Navbar, NavbarBrand } from 'reactstrap';
import { MEDICATIONS } from './shared/medicationlist';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medications: MEDICATIONS
    }
  }
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Medication Reminder</NavbarBrand>
              </div>
              </Navbar>
              <Pharmacy medications={this.state.medications} />
          </div>
      );
  }
}

export default App;
