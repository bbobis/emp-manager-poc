import React, { Component } from 'react';

export default class Employees extends Component {
    constructor(props) {
        super (props);
        this.state = { employees: [] }
    }

    async componentDidMount() {
        try {
            const accessToken = await this.props.auth.getAccessToken();
            const idToken = await this.props.auth.getIdToken();
            console.info('Access Token: ', accessToken);
            console.info('Id Token: ', idToken);
            const response = await fetch('http://localhost:8080/api/employees/', {
                headers: {
                    Authorization: 'Bearer ' + accessToken
                }
            });
            const data = await response.json();
            console.info(data);
            this.setState({
                employees: data
            });
        } catch (e) {
            console.log('Error! ', e);
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.employees && this.state.employees.length > 0 &&
                    <ul>
                        {  this.state.employees.map(e => <li key={e.id}>{e.firstName + ' ' + e.lastName}</li>) }
                    </ul>
                    }
                </header>
            </div>
        )
    }
}
