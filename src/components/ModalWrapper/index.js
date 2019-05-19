import React from 'react';
import { Button } from 'reactstrap';
import Modal from '../Modal';

export default ({ size = 'sm', closeModal }) => {
    return (<Modal size={size} onClose={closeModal}>
        <Modal.Header>
            <Modal.Title>
                Add Task
            </Modal.Title>
        </Modal.Header>
        <Modal.Body padding>
            <textarea className='form-control' style={{ minWidth: 100, minHeight: 100 }}>Task Description here</textarea>
        </Modal.Body>
        <Modal.Footer>
            <Button color="primary" onClick={closeModal}> Save </Button>
            <Button color="secondary" onClick={closeModal}> Close </Button>
        </Modal.Footer>
    </Modal>);
};