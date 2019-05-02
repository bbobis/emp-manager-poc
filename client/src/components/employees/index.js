import React from 'react';
import PropTypes from 'prop-types';
import { SecureRoute } from '@okta/okta-react';
import Employees from './Employees';
import EmployeeCreate from './EmployeeCreate';

const EmployeeRoutes = ({ match }) => (
  <React.Fragment>
    <SecureRoute path={match.path} exact component={Employees} />
    <SecureRoute path={`${match.path}/create`} component={EmployeeCreate} />
  </React.Fragment>
);

EmployeeRoutes.propTypes = {
  match: PropTypes.object.isRequired,
};

export default EmployeeRoutes;
