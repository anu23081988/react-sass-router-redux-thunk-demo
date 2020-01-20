import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LayoutComponent from './components/LayoutComponent.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import AboutComponent from './components/AboutComponent.jsx';
import ContactComponent from './components/ContactComponent.jsx';

export default class App extends React.Component {
    getRoutes = () => {
        return (
            <Switch>
                <Route exact path="/" component={HomeComponent}/>
                <Route exact path="/home" component={HomeComponent}/>
                <Route path="/about-us" component={AboutComponent}/>
                <Route path="/contact-us" component={ContactComponent}/>
            </Switch>
        );
    }
    render(){
        const routes = this.getRoutes();
        return (
            <div>
                <LayoutComponent>
                    {routes}
                </LayoutComponent>
            </div>
        )
        
    }
}