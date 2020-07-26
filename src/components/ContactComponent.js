import React, {Component} from 'react';
import {  BreadcrumbItem, Breadcrumb, Button } from 'reactstrap';
import {Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Contact extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/program">Program</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div>
    
                <div className="row row-content align-items-center">
                    <div className="col-sm-4">
                        <h5>Our Address</h5>
                        <address>
                            1600 Pensylvnia<br />
                            Washington DC<br />
                            U.S.A.
                        </address>
                    </div>
                    <div className="col">
                        <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i> 1-555-555-555</a><br />
                        <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o"></i> customers@guineaexams.com</a>
                    </div>
                </div>
                
                <Form>
                    <Form.Group controlId="contactForm.ControlInput1">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group controlId="contactForm.ControlInput2">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group controlId="contactForm.ControlInput3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="contactForm.ControlTextarea1">
                        <Form.Label>Your Feedback</Form.Label>
                        <Form.Control as="textarea" rows="6" />
                    </Form.Group>
                    <Button type="submit" color="primary" >
                        Submit
                    </Button>
                </Form>
            </div>
        );

    }
}

export default Contact;