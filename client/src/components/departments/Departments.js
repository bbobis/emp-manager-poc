import React, {useEffect, useState} from 'react';
import {Container, ListGroup, ListGroupItem} from "reactstrap";
import {withAuth} from "@okta/okta-react";
import {useToken} from "../../hooks/useAuth";
import services from "../../api";

const Departments = function ({ auth }) {
    const accessToken= useToken(auth);
    const [ departments, setDepartments ] = useState([]);

    useEffect(() => {
        const api = services(accessToken);
        api.getDepartments()
            .then(data => setDepartments(data))
            .catch(() => setDepartments([]));
    }, [accessToken]);

    return (
        <Container>
            <ListGroup>
                {
                    departments &&
                        departments.map(d => <ListGroupItem key={d.name}>{d.name}</ListGroupItem>)
                }
            </ListGroup>
        </Container>
    );
};

export default withAuth(Departments);