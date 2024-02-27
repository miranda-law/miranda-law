import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { default as funnel } from '../assets/funnel.svg';
import "./FormComponent.css";

function FormComponent(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/* Filter Button */}
            <button id="formButton" onClick={handleShow}>
                <img src={funnel} 
                    alt="filter" 
                    id="funnel" 
                />
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        
                        <label className="form-label" htmlFor="form-status">Status:</label> <br />
                        
                        <label className="radio-choice">
                            <input 
                                type="radio" 
                                name="form-status"
                                value="all"
                                checked={props.item.seriesStatus === "all"}
                                onChange={props.handleFormStatus}
                            /> All
                        </label>
                    
                        <label className="radio-choice">
                            <input 
                                type="radio" 
                                name="form-status"
                                value="complete"
                                checked={props.item.seriesStatus === "complete"}
                                onChange={props.handleFormStatus}
                            /> Complete
                        </label>
                    
                        <label className="radio-choice">
                            <input 
                                type="radio" 
                                name="form-status"
                                value="ongoing"
                                checked={props.item.seriesStatus === "ongoing"}
                                onChange={props.handleFormStatus}
                            /> Ongoing
                        </label>
                    
                        <label className="radio-choice">
                            <input 
                                type="radio" 
                                name="form-status"
                                value="hiatus"
                                checked={props.item.seriesStatus === "hiatus"}
                                onChange={props.handleFormStatus}
                            /> Hiatus
                        </label>
                        
                    </form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FormComponent;