import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { withAuth } from '@okta/okta-react';
import API from '../../api';

const Departments = ({ auth }) => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    API(auth)
      .getDepartments()
      .then(data => setDepartments(data))
      .catch(() => setDepartments([]));
  }, [auth]);

  return (
    <Container>
      <ListGroup>
        {departments &&
          departments.map(d => (
            <ListGroupItem key={d.name}>{d.name}</ListGroupItem>
          ))}
      </ListGroup>
    </Container>
  );
};

// declare prop types
Departments.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default withAuth(Departments);
