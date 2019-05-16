import React, { Component } from 'react';
import { Container, Card, CardTitle, Row, Col, CardText, Button } from 'reactstrap';
import './main.css';
import Modal from '../components/Modal';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = { show: false };
    }
    openModal = () => {
        this.setState(() => ({ show: true }));
    }
    closeModal = () => {
        this.setState(() => ({ show: false }));
    }

    render() {
        console.log(this.state.show);
        return (
            <div>
                <div show="false">
                    <Button color="primary">Hello</Button>
                </div>
                <Button color="primary" size="lg" active onClick={this.openModal}>+</Button>
                <div show={this.state.show}>
                    <Modal size="sm" onClose={this.closeModal}>
                        <Modal.Header>
                            <Modal.Title>
                                Modal Title
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body padding>
                            Modal Body
                        </Modal.Body>
                        <Modal.Footer>
                            <Button color="primary" onClick={() => this.setState({ show: false })}> Save </Button>
                            <Button color="secondary" onClick={() => this.setState({ show: false })}> Close </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
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