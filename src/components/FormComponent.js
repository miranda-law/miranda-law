import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-form-body">
                    <form>
                        
                        <label className="form-label" htmlFor="form-status">Status:</label> <br />
                        
                        <label className="radio-choice">
                            <input 
                                type="radio" 
                                name="form-status"
                                value="all"
                                checked={props.item.displayStatus === "all"}
                                onChange={props.handleChange}
                            /> All
                        </label>
                    
                        <label className="radio-choice">
                            <input 
                                type="radio" 
                                name="form-status"
                                value="complete"
                                checked={props.item.displayStatus === "complete"}
                                onChange={props.handleChange}
                            /> Complete
                        </label>
                    
                        <label className="radio-choice">
                            <input 
                                type="radio" 
                                name="form-status"
                                value="ongoing"
                                checked={props.item.displayStatus === "ongoing"}
                                onChange={props.handleChange}
                            /> Ongoing
                        </label>
                    
                        <label className="radio-choice">
                            <input 
                                type="radio" 
                                name="form-status"
                                value="hiatus"
                                checked={props.item.displayStatus === "hiatus"}
                                onChange={props.handleChange}
                            /> Hiatus
                        </label> <br /> <br />
                        
                        <label className="form-label" htmlFor="form-tags">Tags:</label>

                        <div className="form-tag-container">
                            {Object.keys(props.item.displayTags).map((item) => {
                                return (
                                <>
                                    <label key={`checkbox-${item}`}className="checkbox-choice">
                                        <input 
                                            type="checkbox" 
                                            name="form-tags"
                                            value={item}
                                            checked={props.item.displayTags[item]}
                                            onChange={props.handleChange}
                                        /> {item}
                                    </label> <br />
                                </>)
                            })}
                        </div>
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