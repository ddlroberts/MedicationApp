import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderMedicationItem({medication, onClick}) {
    return (
        <Card onClick={() => onClick(medication.id)} >
        <CardImg width="100%" src={medication.image} alt={medication.name} />
        <CardImgOverlay>
            <CardTitle>{medication.name}</CardTitle>
        </CardImgOverlay>
    </Card>
    )
            
}

function Pharmacy(props) {
     
        const medication = props.medications.map(medication => {
            return (
              <div key={medication.id} className="col-md-5 m-1"> 
                <RenderMedicationItem medication={medication} onClick={props.onClick} />
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


export default Pharmacy;
