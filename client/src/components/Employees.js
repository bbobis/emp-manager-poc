import React, {useEffect, useState} from 'react';
import {Container, ListGroup, ListGroupItem} from "reactstrap";
import withApi from "./Api";

export default withApi(function (props) {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        if (props.apiReady) {
            const fetchData = async () => setEmployees(await props.getEmployees());
            fetchData().catch(() => []);
        }
    }, [props.apiReady]);

    return (
        <Container>
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
});