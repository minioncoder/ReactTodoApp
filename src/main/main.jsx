import React, { Component } from 'react';
import { Container, Card, CardTitle, Row, Col, CardText, Button } from 'reactstrap';
import './main.css'

class Todos extends Component {
    state = {}
    render() {
        return (
            <div>
                <Button color="primary" size="lg" active>+</Button>
                <Container>
                    <Row>
                        <Col sm="4">
                        <div className="headerClass"> 
                            <h3>TODOS</h3>
                        </div>
                            <Card body>
                                <CardTitle>Chores</CardTitle>
                                <CardText>PowerBill have to be paid by Month end</CardText>
                                <Button color="primary">Go Inprogress</Button>
                            </Card>
                            <Card body>
                                <CardTitle>Chores</CardTitle>
                                <CardText>PowerBill have to be paid by Month end</CardText>
                                <Button color="primary">Go Inprogress</Button>
                            </Card>
                        </Col>
                        <Col sm="4">
                        <div className="headerClass"><h3>IN PROGRESS</h3></div>
                            <Card body>
                                <CardTitle>Chores</CardTitle>
                                <CardText>PowerBill have to be paid by Month end</CardText>
                                <Button color="primary">Go Done</Button>
                            </Card>
                        </Col>
                        <Col sm="4">
                        <div className="headerClass"><h3>DONE</h3></div>
                            <Card body>
                                <CardTitle>Chores</CardTitle>
                                <CardText>PowerBill have to be paid by Month end</CardText>
                                <Button color="primary">Completed</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Todos;