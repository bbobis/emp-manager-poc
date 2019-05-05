import React, { useEffect, useState } from 'react';
import { withAuth } from '@okta/okta-react';
import {
  Button,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import moment from 'moment/moment';
import PropTypes from 'prop-types';
import API from '../../api';

// Input control state object
const createFormStateControl = (initialState = '') => ({
  value: initialState,
  isValid: true,
  validationMessage: '',
});

const initializeFormState = () => ({
  isFormValid: true,
  firstName: createFormStateControl(),
  lastName: createFormStateControl(),
  birthDate: createFormStateControl(moment().format(moment.HTML5_FMT.DATE)),
  selectedTitle: createFormStateControl(),
  selectedDepartments: createFormStateControl([]),
});

// Form validator
const validate = formState => {
  const newState = { ...formState };

  // validate first name
  if (!newState.firstName.value) {
    newState.firstName.validationMessage = 'First name is required';
    newState.firstName.isValid = false;
  }

  // validate last name
  if (!newState.lastName.value) {
    newState.lastName.validationMessage = 'Last name is require';
    newState.lastName.isValid = false;
  }

  // validate birth date
  if (!newState.birthDate.value) {
    newState.birthDate.validationMessage = 'Birth date is required';
    newState.birthDate.isValid = false;
  }

  if (moment(newState.birthDate.value).isAfter(moment())) {
    newState.birthDate.validationMessage = 'Birth date cannot be a future date';
    newState.birthDate.isValid = false;
  }

  // validate title
  if (!newState.selectedTitle.value) {
    newState.selectedTitle.validationMessage = 'Title is required';
    newState.selectedTitle.isValid = false;
  }

  // validate departments
  if (!newState.selectedDepartments.value.length) {
    newState.selectedDepartments.validationMessage = 'Department is required';
    newState.selectedDepartments.isValid = false;
  }

  return {
    ...newState,
    isFormValid: Object.keys(newState)
      .filter(key =>
        Object.prototype.hasOwnProperty.call(newState[key], 'isValid')
      )
      .map(key => newState[key].isValid)
      .reduce((previousValue, currentValue) => previousValue && currentValue),
  };
};

// Component
const EmployeeCreate = ({ auth }) => {
  const [titles, setTitles] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const { getTitles, getDepartments } = API(auth);

    // fetch titles
    getTitles()
      .then(data => setTitles(data))
      .catch(() => []);

    // fetch departments
    getDepartments()
      .then(data => setDepartments(data))
      .catch(() => []);
  }, [auth]);

  // initialize a clean form
  const [formState, setFormState] = useState(initializeFormState());

  const handleChange = ({ target }) => {
    const newState = { ...formState };
    const { name, value, selectedOptions } = target;
    newState[name] =
      name === 'selectedDepartments'
        ? createFormStateControl([...selectedOptions].map(o => o.value))
        : createFormStateControl(value);

    setFormState(newState);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const postedForm = validate(formState);

    if (postedForm.isFormValid) {
      // On successful save return form to initial state
      const { createEmployee } = API(auth);
      createEmployee(
        postedForm.firstName.value,
        postedForm.lastName.value,
        postedForm.birthDate.value,
        moment().format(moment.HTML5_FMT.DATE),
        postedForm.selectedTitle.value,
        postedForm.selectedDepartments.value
      )
        .then(() => setFormState(initializeFormState()))
        .catch(() => '');
    } else {
      setFormState(postedForm);
    }
  };

  const {
    firstName,
    lastName,
    birthDate,
    selectedTitle,
    selectedDepartments,
  } = formState;
  return (
    <Container>
      <h1>Add Employee</h1>
      <hr />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            name="firstName"
            value={firstName.value}
            onChange={handleChange}
            invalid={!firstName.isValid}
          />
          <FormFeedback>{firstName.validationMessage}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            name="lastName"
            value={lastName.value}
            onChange={handleChange}
            invalid={!lastName.isValid}
          />
          <FormFeedback>{lastName.validationMessage}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="birthDate">Birth Date</Label>
          <Input
            type="date"
            name="birthDate"
            value={birthDate.value}
            onChange={handleChange}
            invalid={!birthDate.isValid}
          />
          <FormFeedback>{birthDate.validationMessage}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="select"
            name="selectedTitle"
            value={selectedTitle.value}
            onChange={handleChange}
            invalid={!selectedTitle.isValid}
          >
            <option>Select title</option>
            {titles &&
              titles.map(({ name, _links }) => (
                <option key={name} value={_links.self.href}>
                  {name}
                </option>
              ))}
          </Input>
          <FormFeedback>{selectedTitle.validationMessage}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="title">Departments</Label>
          <Input
            type="select"
            multiple
            name="selectedDepartments"
            value={selectedDepartments.value}
            onChange={handleChange}
            invalid={!selectedDepartments.isValid}
          >
            {departments &&
              departments.map(({ name, _links }) => (
                <option key={name} value={_links.self.href}>
                  {name}
                </option>
              ))}
          </Input>
          <FormFeedback>{selectedDepartments.validationMessage}</FormFeedback>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

// declare prop types
EmployeeCreate.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default withAuth(EmployeeCreate);
