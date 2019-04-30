import React from 'react';
import Employees from './components/Employees';
import EmployeeCreate from './components/EmployeeCreate';
import {SecureRoute} from "@okta/okta-react";

export const EmployeesRoutes = () => (
    <React.Fragment>
        <SecureRoute path="/employees" exact component={Employees} />
        <SecureRoute path="/employees/create" component={EmployeeCreate} />
    </React.Fragment>
);