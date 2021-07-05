import React, { Component } from 'react';
import Pharmacy from './PharmacyComponent';
import { MEDICATIONS } from '../shared/medicationlist';
import { MedicationInfo} from './MedicationInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';



class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medications: MEDICATIONS,
      
    }
  }

 render() {

     const HomePage = () => {
       return (
         <Home />
       )
     }
      return (
          <div>
              <Header />
              <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/pharmacy' render={() => <Pharmacy medications={this.state.medications} />} />
                <Redirect to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;
