import React, {useRef} from "react";
import {Modal, Form, Button} from "react-bootstrap";

export default function NewContactModal({closeModal}) {
    const idRef = useRef()
    const nomRef = useRef()


    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div>
            <>
                <Modal.Header closeButton>
                    Créer contact
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>
                                Id
                            </Form.Label>
                            <Form.Control type="text" ref={idRef} required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Nom
                            </Form.Label>
                            <Form.Control type="text" ref={nomRef} required/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </>
        </div>
    )
}