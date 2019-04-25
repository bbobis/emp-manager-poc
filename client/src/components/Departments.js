import React, {useEffect, useState} from 'react';
import {Container, ListGroup, ListGroupItem} from "reactstrap";
import withApi from "./Api";

export default withApi(function (props) {
    const [ departments, setDepartments ] = useState([]);

    useEffect(() => {
        if (props.apiReady) {
            const fetchData = async () => setDepartments(await props.getDepartments());
            fetchData().catch(() => []);
        }
    }, [props.apiReady]);

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
});