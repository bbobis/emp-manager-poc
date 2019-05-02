import React from 'react';
import PropTypes from 'prop-types';
import { SecureRoute } from '@okta/okta-react';
import Departments from './Departments';

const DepartmentRoutes = ({ match }) => (
  <React.Fragment>
    <SecureRoute path={match.path} component={Departments} />
  </React.Fragment>
);

DepartmentRoutes.propTypes = {
  match: PropTypes.object.isRequired,
};

export default DepartmentRoutes;
