import traverson from 'traverson';
import JsonHalAdapter from 'traverson-hal';
import config from "./config";

// register the traverson-hal plug-in for media type 'application/hal+json'
traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);

const api = traverson.from(config.api.employeeManagerService).jsonHal();

export default (token => {
    const requestConfig = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/hal+json',
            'Content-Type': 'application/json'
        }
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
                reject([]);
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
                    .post({
                        firstName,
                        lastName,
                        birthDate,
                        hireDate,
                        title,
                        departments
                    }, (error, response, traversal) => {
                        console.log(response);
                        console.log(traversal);
                        resolve('');
                    });
            } else {
                reject([]);
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
                reject([]);
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
                reject([]);
            }
        });
    };

    return {
        getEmployees,
        getDepartments,
        getTitles,
        createEmployee
    }
});