import React from 'react';
import {SecureRoute} from "@okta/okta-react";
import Departments from "./Departments";

export default ({match}) =>
    <React.Fragment>
        <SecureRoute path={match.path} component={Departments} />
    </React.Fragment>