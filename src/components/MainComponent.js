import React, { Component } from 'react';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import Program from './ProgramComponent';
import Instructor from './InstructorComponent';
import Contact from './ContactComponent';
import Blog from './BlogComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import { INSTRUCTORS } from '../shared/instructors';


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            instructors: INSTRUCTORS
        };
    }
    render() {
        return (
            
            <div>
                <Navigation />
                <Switch>
                    <Route path='/programs' component={Program} />
                    <Route exact path='/instructors' render={() => <Instructor instructors={this.state.instructors} /> } />
                    < Route exact path='/contactus' component={Contact} />  
                    < Route exact path='/blog' component={Blog} />  
                    < Route exact path='/aboutus' component={About} />  
                    <Redirect to='/programs' />
                </Switch>
                <Footer />
            </div>
        );
    };
}

export default Main;