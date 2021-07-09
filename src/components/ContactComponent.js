import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      contactType: "By Phone",
      contactReason: "",
      touched: {
          firstName: false,
          lastName: false,
          phoneNum: false,
          email: false
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  validate(firstName, lastName, phoneNum, email) {
      const errors = {
          firstName: '',
          lastName: '',
          phoneNum: '',
          email: ''
      };

      if (this.state.touched.firstName) {
        if (firstName.length < 2) {
            errors.firstName = 'First name must be at least 2 characters.';
        } else if (firstName.length > 15) {
            errors.firstName = 'First name must be 15 or less characters.';
        }
    }

    if (this.state.touched.lastName) {
        if (lastName.length < 2) {
            errors.lastName = 'Last name must be at least 2 characters.';
        } else if (lastName.length > 15) {
            errors.lastName = 'Last name must be 15 or less characters.';
        }
    }

    const reg = /^\d+$/;
    if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers.';
    }

    if (this.state.touched.email && !email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
  }

  handleBlur = (field) => () => {
      this.setState({
          touched: {...this.state.touched, [field]: true}
      });
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Thank you for contacting us. We will get back to you with 24 hours\n if this is an emergency please call 911");
    event.preventDefault();
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {

    const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email); 
    return (

      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Contact your Doctor</BreadcrumbItem>
            </Breadcrumb>
            <h2>Contact Your Doctor Office</h2>
            <hr />
          </div>
        </div>

        <div className="row row-content align-items-center">
          <div className="col-sm-4">
            <h5>Office Address</h5>
            <address>
              3125 Main Street
              <br />
              Kennesaw, GA 30144
              <br />
              U.S.A.
            </address>
          </div>
          <div className="col">
            <a role="button" className="btn btn-link" href="tel:+12065551234">
              <i className="fa fa-phone" /> 1-678-595-1234
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:fakeemail@fakeemail.co"
            >
              <i className="fa fa-envelope-o" /> drjonsmith@MedicalPark.com
            </a>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h2>Your information</h2>
            <hr />
          </div>
          <div className="col-md-10">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    invalid={errors.firstName}
                    onBlur={this.handleBlur("firstName")}
                    onChange={this.handleInputChange} />
                  <FormFeedback>{errors.firstName}</FormFeedback>  
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    invalid={errors.lastName}
                    onBlur={this.handleBlur("lastName")}
                    onChange={this.handleInputChange} />
                <FormFeedback>{errors.lastName}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="phoneNum" md={2}>
                  Phone
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="phoneNum"
                    name="phoneNum"
                    placeholder="Phone number"
                    value={this.state.phoneNum}
                    invalid={errors.phoneNum}
                    onBlur={this.handleBlur("phoneNum")}
                    onChange={this.handleInputChange} />
                <FormFeedback>{errors.phoneNum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    invalid={errors.email}
                    onBlur={this.handleBlur("email")}
                    onChange={this.handleInputChange} />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="feedback" md={2}>
                  Reason for contacting Doctor
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="feedback"
                    name="feedback"
                    rows="12"
                    value={this.state.feedback}
                    onChange={this.handleInputChange}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
