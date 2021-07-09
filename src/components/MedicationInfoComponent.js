import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMedication({medication}) {
        return (
            <div className="col-md-5 m-1">
             <Card>
                    <CardImg top src={medication.image} alt={medication.name} />
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
                <div className="col">
                <Breadcrumb>
                          <BreadcrumbItem><Link to="/pharmacy">My Prescriptions</Link></BreadcrumbItem>
                          <BreadcrumbItem active>{props.medication.name}</BreadcrumbItem>
                </Breadcrumb>
                    <h2>{props.medication.name}</h2>
                    <hr />
                </div>
            </div>  
        <div className="row">
            <RenderMedication medication={props.medication} />
        </div>
        </div>
        );
    } else {
        return <div></div>
    }
  }





