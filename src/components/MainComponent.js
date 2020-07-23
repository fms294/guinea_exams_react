import React, { Component } from 'react';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import Program from './ProgramComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';


class Main extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Program />
                <Footer />
            </div>
        );
    };
}

export default Main;