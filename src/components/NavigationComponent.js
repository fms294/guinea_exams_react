import React, { useState , Component} from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, 
    Jumbotron , UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, 
    Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label} from 'reactstrap';
import {FormControl} from 'react-bootstrap';



class Navigation extends Component{
    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state ={
            isNavOpen : false,
            isModalOpen: false,
            isSignupOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleSignup = this.toggleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    toggleSignup(){
        this.setState({
            isSignupOpen: !this.state.isSignupOpen
        });
    }
    handleLogin(event){
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember:${this.remember.checked}`)
        this.toggleModal();
        event.preventDefault();
    }

    handleSignup(event){
        alert(`FirstName: ${this.firstname.value} LastName: ${this.lastname.value} Email:${this.email.value} Password: ${this.password.value} Conform Password: ${this.password.value} 
        Remember:${this.remember.checked} `)
        this.toggleSignup();
        event.preventDefault();
    }
    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-sm-3 col-md-2 align-self-center">
                                <a href="/"><img src="assets/images/logo.jpg" class="rounded-circle" alt="logo image" height="170" width="170" /></a>
                            </div>
                            <div className="col  my-auto">
                                <h1>Guinea Exams</h1>
                                <h2>Your Exams in your hand</h2>
                            </div>

                        </div>
                    </div>       
                </Jumbotron>
                <Navbar color="dark" dark expand='md'>
                    <div className="container" sticky="top" expand="md">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/program" >
                                       <i className='fa fa-home fa-lg' /> Programs
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/instructor" >
                                       <i className='fa fa-user fa-lg' /> Instructors 
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                            <i className="fa fa-bars fa-lg" /> More
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            About
                                        </DropdownItem>
                                        <DropdownItem>
                                        Blog
                                        </DropdownItem>
                                        <DropdownItem>
                                            Contact
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>{" "}
                                
                            </Nav>
                            <Form inline className="mx-auto my-lg-0">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2 col-9 col-sm-8" />
                                <Button variant="outline-light">Search</Button>
                            </Form> 
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in fa-lg" />Login
                                </Button>
                            </span> 
                            <span className="navbar-text ml-4">
                                <Button outline onClick={this.toggleSignup}>
                                    <i className="fa fa-user-plus" />Sign up
                                </Button>
                            </span> 
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isSignupOpen} toggle={this.toggleSignup}>
                    <ModalHeader toggle={this.toggleSignup}>Sign up</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSignup}>
                            <FormGroup>
                                <Label htmlFor="firstname">First Name</Label>
                                <Input type="text" id="firstname" name="firstname"
                                    innerRef={input => this.firstname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">Last Name</Label>
                                <Input type="text" id="lastname" name="lastname"
                                    innerRef={input => this.lastname = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Confirm Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={input => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="cancel" color="danger">Cancel</Button> {"   "}
                            <Button type="submit" value="signup" color="success">Sign up</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
  );
}
}

export default Navigation;

