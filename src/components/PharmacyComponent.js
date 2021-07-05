import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Pharmacy extends Component {
      
    render() {
        const medication = this.props.medications.map(medication => {
            return (
              <div key={medication.id} className="col-md-5 m-1"> 
                <Card onClick={() => this.props.onClick(medication.id)} >
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
               
              </div>
          </div>
        );
    }
}

export default Pharmacy;
