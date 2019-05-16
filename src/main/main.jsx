import React, { Component } from 'react';
import { Container, Card, CardTitle, Row, Col, CardText, Button } from 'reactstrap';
import './main.css';
import Modal from '../components/Modal';

class Todos extends Component {
    constructor(props) {
        super(props);

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = { isHidden: true };
    }
    openModal = () => {
        this.setState({ isHidden: !this.state.isHidden });
    }
    closeModal = () => { 
        this.setState({ isHidden: true });
    }

    render() {
        return (
            <div>
                <Button color="primary" size="lg" active onClick={this.openModal}>+</Button>
                    {!this.state.isHidden && 
                        (<Modal size="sm" onClose={this.closeModal}>
                        <Modal.Header>
                            <Modal.Title>
                                Modal Title
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body padding>
                            Modal Body
                        </Modal.Body>
                        <Modal.Footer>
                            <Button color="primary" onClick={this.closeModal}> Save </Button>
                            <Button color="secondary" onClick={this.closeModal}> Close </Button>
                        </Modal.Footer>
                    </Modal>)
                    }
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