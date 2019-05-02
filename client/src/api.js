import traverson from 'traverson';
import JsonHalAdapter from 'traverson-hal';

// register the traverson-hal plug-in for media type 'application/hal+json'
traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);

const api = traverson.from('/api/').jsonHal();

/* eslint-disable no-underscore-dangle */
export default token => {
  const requestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/hal+json',
      'Content-Type': 'application/json',
    },
  };

  const getEmployees = () => {
    return new Promise((resolve, reject) => {
      if (token) {
        api
          .newRequest()
          .withRequestOptions(requestConfig)
          .follow('employees')
          .getResource((error, resource) => {
            resolve(resource._embedded.employees);
          });
      } else {
        reject(new Error('Problem encountered getting employees'));
      }
    });
  };

  const createEmployee = (
    firstName,
    lastName,
    birthDate,
    hireDate,
    title,
    departments
  ) => {
    return new Promise((resolve, reject) => {
      if (token) {
        api
          .newRequest()
          .withRequestOptions(requestConfig)
          .follow('employees')
          .post(
            {
              firstName,
              lastName,
              birthDate,
              hireDate,
              title,
              departments,
            },
            () => {
              resolve('');
            }
          );
      } else {
        reject(new Error('Problem encountered creating employee'));
      }
    });
  };

  const getDepartments = () => {
    return new Promise((resolve, reject) => {
      if (token) {
        api
          .newRequest()
          .withRequestOptions(requestConfig)
          .follow('departments')
          .getResource((error, resource) => {
            resolve(resource._embedded.departments);
          });
      } else {
        reject(new Error('Problem encountered getting departments'));
      }
    });
  };

  const getTitles = () => {
    return new Promise((resolve, reject) => {
      if (token) {
        api
          .newRequest()
          .withRequestOptions(requestConfig)
          .follow('titles')
          .getResource((error, resource) => {
            resolve(resource._embedded.titles);
          });
      } else {
        reject(new Error('Problem encountered getting titles'));
      }
    });
  };

  return {
    getEmployees,
    getDepartments,
    getTitles,
    createEmployee,
  };
};
