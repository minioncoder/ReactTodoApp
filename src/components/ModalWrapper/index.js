import React from 'react';
import { Button } from '../Buttons';
import Modal from '../Modal';

export default ({ size = 'sm', closeModal, ...props }) => (
    <Modal {...props} size={size} onClose={closeModal}>
        <Modal.Header>
            <Modal.Title>
                Modal Title
            </Modal.Title>
        </Modal.Header>
        <Modal.Body padding>
            Modal Body
        </Modal.Body>
        <Modal.Footer>
            <Button
                btnStyle="primary"
                onClick={closeModal}
            >
                Save
            </Button>
            <Button
                btnStyle="default"
                onClick={closeModal}
            >
                Close
            </Button>
        </Modal.Footer>
    </Modal>
);