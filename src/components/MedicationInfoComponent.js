import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderMedication({medication}) {
        return (
            <div className="col-md-5 m-1">
             <Card>
                    <CardImg src={medication.image} alt={medication.name} />
                    <CardBody>
                        <CardTitle>{medication.name}</CardTitle>
                        <CardText>{medication.dosage}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    
   export function MedicationInfo(props)  {
    if (props.medication) {
        return ( 
            <div className="container">
        <div className="row">
            <RenderMedication medication={props.medication} />
        </div>
        </div>
        );
    } else {
        return <div></div>
    }
  }





