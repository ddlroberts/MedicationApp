import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMedicationItem({medication}) {
    return (
        <Card >
            <Link to={`/pharmacy/${medication.id}`}>
        <CardImg width="100%" src={medication.image} alt={medication.name} />
        <CardImgOverlay>
            <CardTitle>{medication.name}</CardTitle>
        </CardImgOverlay>
        </Link>
    </Card>
    )
            
}

function Pharmacy(props) {
     
        const medication = props.medications.map(medication => {
            return (
              <div key={medication.id} className="col-md-5 m-1"> 
                <RenderMedicationItem medication={medication} />
            </div>   
            );
        });

        return(
          <div className="container">
              <div className="row">
                  <div className="col">
                      <Breadcrumb>
                          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                          <BreadcrumbItem active>My Prescriptions</BreadcrumbItem>
                      </Breadcrumb>
                      <h2>My Prescriptions</h2>
                      <hr />
                  </div>
              </div>

              <div className="row">
                  {medication}
              </div>
              
          </div>
        );
    }


export default Pharmacy;
