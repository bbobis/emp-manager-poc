import React, { useState, useEffect } from 'react';
import { withAuth } from '@okta/okta-react'
import config from '../config';

const services = (token => {
    const requestConfig = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    const getEmployees = () => fetch(config.api.employees, requestConfig)
        .then(response => response.json())
        .then(data => data['_embedded'].employees);

    const getDepartments = () => fetch(config.api.departments, requestConfig)
        .then(response => response.json())
        .then(data => data['_embedded'].departments);

    return {
        getEmployees,
        getDepartments
    }
});

const withApi = (WrappedComponent) => {
    return withAuth((props) => {
        const [token, setToken] = useState('');

        useEffect(() => {
            props.auth.getAccessToken()
                .then((t) => setToken(t))
                .catch(() => '');
        }, [token]);

        const apiReady = !!token;
        const newProps = {apiReady, ...services(token), ...props};

        return <WrappedComponent {...newProps}/>
    });
};

export default withApi;