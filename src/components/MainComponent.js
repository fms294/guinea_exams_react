import React, { Component } from 'react';
import Navigation from './NavigationComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';


class Main extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <h1>Sylla</h1>
                <Footer />
            </div>
        );
    };
}

export default Main;