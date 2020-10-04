import React from 'react';
import { Switch, Route, useLocation} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Demo from './Demo';

const Main = () => {

    let location = useLocation();

    return (
        <Switch location={location}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/ggdemo" component={Demo}/>
        </Switch>
    );
};

export default Main;