const auth = {
    issuerUrl: process.env.REACT_APP_ISSUER_URL || 'https://dev-211653.okta.com/oauth2/default',
    clientId: process.env.REACT_APP_CLIENT_ID || '0oahovl5b9iF257jW356'
};

const app = {
    protocol: process.env.NODE_ENV === 'prod' ? 'https' : 'http'
};

const api = {
    employees: `${app.protocol}://localhost:8080/api/employees`,
    departments: `${app.protocol}://localhost:8080/api/departments`,
};

export default {
    auth ,
    app,
    api
}