import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Pharmacy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMedication: null
            

        };
    }

    onMedicationSelect(medication) {
        this.setState({selectedMedication: medication})
    }

    renderSelectedMedication(medication) {
        if (medication) {
            return (
                <Card>
                    <CardImg top src={medication.image} alt={medication.name} />
                    <CardBody>
                        <CardTitle>{medication.name}</CardTitle>
                        <CardText>{medication.dosage}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />
    }

    render() {
        const medication = this.props.medications.map(medication => {
            return (
              <div key={medication.id} className="col-md-5 m-1"> 
                <Card onClick={() => this.onMedicationSelect(medication)} >
                    <CardImg width="100%" src={medication.image} alt={medication.name} />
                    <CardImgOverlay>
                        <CardTitle>{medication.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>   
            );
        });

        return(
          <div className="container">
              <div className="row">
                  {medication}
              </div>
              <div className="row">
                  <div className="col-md-5 m-1">
                      {this.renderSelectedMedication(this.state.selectedMedication)}
                  </div>
              </div>
          </div>
        );
    }
}

export default Pharmacy;
