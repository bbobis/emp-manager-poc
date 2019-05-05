import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Container,
  Input,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';
import { withAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';
import API from '../../api';

const Employees = ({ auth }) => {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    API(auth)
      .getEmployees(search)
      .then(data => setEmployees(data))
      .catch(() => setEmployees([]));
  }, [auth, search]);

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-between">
          <h3>Employees</h3>
          <Link className="btn btn-success" to="/employees/create">
            Add
          </Link>
        </Col>
      </Row>
      <hr />
      <Input
        placeholder="Search name"
        onChange={e => setSearch(e.target.value)}
      />
      <br />
      <ListGroup>
        {employees &&
          employees.map(e => (
            <ListGroupItem key={e._links.self.href}>{e.fullName}</ListGroupItem>
          ))}
      </ListGroup>
    </Container>
  );
};

// declare prop types
Employees.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default withAuth(Employees);
