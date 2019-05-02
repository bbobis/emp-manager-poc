import React, { useEffect, useState } from 'react';
import { withAuth } from '@okta/okta-react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import moment from 'moment/moment';
import { useToken } from '../../hooks/useAuth';
import API from '../../api';
import PropTypes from 'prop-types';

const EmployeeCreate = ({ auth, history }) => {
  const accessToken = useToken(auth);

  // fetch titles
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    const { getTitles } = API(accessToken);
    getTitles()
      .then(data => setTitles(data))
      .catch(() => []);
  }, [accessToken]);

  // fetch departments
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    const { getDepartments } = API(accessToken);
    getDepartments()
      .then(data => setDepartments(data))
      .catch(() => []);
  }, [accessToken]);

  //form states
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState(moment().format('YYYY-MM-DD'));
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const handleChange = event => {
    switch (event.target.name) {
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'birthDate':
        setBirthDate(event.target.value);
        break;
      case 'title':
        setSelectedTitle(event.target.value);
        break;
      case 'departments':
        setSelectedDepartments([...selectedDepartments, event.target.value]);
        break;
      default:
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (accessToken) {
      const api = API(accessToken);
      api
        .createEmployee(
          firstName,
          lastName,
          birthDate,
          moment().format('YYYY-MM-DD'),
          selectedTitle,
          selectedDepartments
        )
        .then(() => history.replace('/employees'));
    }
  };
  return (
    <Container>
      <h1>Add Employee</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input name="firstName" value={firstName} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input name="lastName" value={lastName} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label for="birthDate">Birth Date</Label>
          <Input
            type="date"
            name="birthDate"
            value={birthDate}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="select"
            name="title"
            value={selectedTitle}
            onChange={handleChange}
          >
            {titles &&
              titles.map(({ name, _links }) => (
                <option key={name} value={_links.self.href}>
                  {name}
                </option>
              ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="title">Departments</Label>
          <Input
            type="select"
            multiple
            name="departments"
            value={selectedDepartments}
            onChange={handleChange}
          >
            {departments &&
              departments.map(({ name, _links }) => (
                <option key={name} value={_links.self.href}>
                  {name}
                </option>
              ))}
          </Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

// declare prop types
EmployeeCreate.propTypes = {
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default withAuth(EmployeeCreate);
