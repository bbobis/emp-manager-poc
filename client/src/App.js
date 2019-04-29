import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ImplicitCallback, SecureRoute, Security} from '@okta/okta-react';
import Home from './components/Home';
import Employees from "./components/Employees";
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.css';
import config from './config';
import Departments from "./components/Departments";

class App extends Component {
    render() {
        return (
            <Router>
                <Security issuer={config.auth.issuerUrl}
                          client_id={config.auth.clientId}
                          redirect_uri={window.location.origin + '/implicit/callback'}>
                    <NavigationBar/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <SecureRoute path='/employees' component={Employees}/>
                        <SecureRoute path='/departments' component={Departments}/>
                        <Route path='/implicit/callback' component={ImplicitCallback}/>
                    </Switch>
                </Security>
            </Router>
        );
    }
}

export default App;
