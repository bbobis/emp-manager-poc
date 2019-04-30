import React, {useEffect, useState} from 'react';
import {Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";
import {withAuth} from "@okta/okta-react";
import services from '../api';
import {useToken} from '../hooks/useAuth';
import {Link} from "react-router-dom";

const Employees = ({ auth }) => {
    const accessToken= useToken(auth);
    const [employees, setEmployees] = useState([]);
    console.log(accessToken);
    useEffect(() => {
        const api = services(accessToken);
        api.getEmployees()
            .then(data => setEmployees(data))
            .catch(() => setEmployees([]));
    }, [accessToken]);

    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-between">
                    <h3>Employees</h3>
                    <Link className="btn btn-success" to="/employees/create" >Add</Link>
                </Col>
            </Row>
            <hr/>
            <ListGroup>
                {
                    employees &&
                    employees.map(e =>
                        <ListGroupItem key={`${e.firstName}_${e.lastName}`}>
                            {`${e.firstName} ${e.lastName}`}
                        </ListGroupItem>
                    )
                }
            </ListGroup>
        </Container>
    );
};

export default withAuth(Employees);