import React from 'react';
import Employees from './Employees';
import EmployeeCreate from './EmployeeCreate';
import {SecureRoute} from "@okta/okta-react";

export default ( { match } ) =>
    <React.Fragment>
        <SecureRoute path={match.path} exact component={Employees} />
        <SecureRoute path={`${match.path}/create`} component={EmployeeCreate} />
    </React.Fragment>;