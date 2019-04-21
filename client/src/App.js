import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Home from './Home';

class App extends Component {
  render() {
    return (
        <Router>
          <Security issuer='https://dev-211653.okta.com/oauth2/default'
                    client_id='0oahovl5b9iF257jW356'
                    redirect_uri={window.location.origin + '/implicit/callback'} >
            <SecureRoute path='/' exact={true} component={Home}/>
            <Route path='/implicit/callback' component={ImplicitCallback} />
          </Security>
        </Router>
    );
  }
}

export default App;
