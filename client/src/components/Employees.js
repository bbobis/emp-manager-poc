import React, {Fragment, useEffect, useState} from 'react';
import {Button, Container, ListGroup, ListGroupItem, Row} from "reactstrap";
import {withAuth} from "@okta/okta-react";
import services from '../api';
import {useToken} from '../hooks/useAuth';
import EmployeeForm from "./EmployeeForm";
import Col from "reactstrap/es/Col";

const Employees = ({ auth, match, history }) => {
    const accessToken= useToken(auth);
    const [employees, setEmployees] = useState([]);
    const [showForm, setShowForm] = useState(false);
    console.log(accessToken);
    const handleAddEmployee = () => {
        setShowForm(true);
        history.push(`${match.path}/create`);
    };

    useEffect(() => {
        const api = services(accessToken);
        api.getEmployees()
            .then(data => setEmployees(data))
            .catch(() => setEmployees([]));
    }, [accessToken]);

    return (
       <Fragment>
           {!showForm &&
               <Container>
                   <Row>
                       <Col className="d-flex justify-content-between">
                           <h1>Employees</h1>
                           <Button color="success" onClick={handleAddEmployee}>Add</Button>
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
           }
           {showForm &&
                <EmployeeForm />
           }

       </Fragment>
    );
};

export default withAuth(Employees);