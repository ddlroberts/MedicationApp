import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export class MedicationInfo extends Component {
    constructor(props) {
     super(props);
    }

    renderMedication(medication) {
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
        )
    };

   renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => (
                      <p>
                          {comment.text} <br />
                          {comment.author}, 
                          {new Intl.DateTimeFormat('en-US', 
                          { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                      </p>  
                    ))}
                </div>
            )
        } 
        return <div></div>
    }; 
  
    render() {
    if (this.props.medication) {
        return ( 
            <div className="container">
        <div className="row">
          { this.renderMedication(this.props.medication) }
         
        </div>
        </div>
        )
    } else {
        return <div></div>
    }
  };
}



