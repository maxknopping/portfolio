import React from 'react';
import { Switch, Route, useLocation} from 'react-router-dom';
import {
    TransitionGroup,
    CSSTransition
  } from "react-transition-group";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

const Main = () => {

    let location = useLocation();

    return (
        <Switch location={location}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/Resume" component={Resume}/>
        </Switch>
    );
};

export default Main;