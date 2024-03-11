import React, {Fragment} from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ReactComponent as Funnel } from '../assets/funnel.svg';
import "./FormComponent.css";

function FormComponent(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const data = props.item;

    return (
        <>
            {/* Filter Button */}
            <button id="formButton" onClick={handleShow}>
                <Funnel id="funnelIcon" />
            </button>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Filter</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-form-body">
                    <form id="filter-form">
                        {/* status section */}
                        <label className="form-label" htmlFor="form-status">Status:</label> <br />
                        {/* all */}
                        <label className="radio-choice">
                            <input 
                                type="radio" 
                                name="form-status"
                                value="all"
                                checked={data.displayStatus === "all"}
                                onChange={props.handleChange}
                            /> All
                        </label>
                        {/* complete */}
                        <label className="radio-choice">
                            <input 
                                type="radio" 
                                name="form-status"
                                value="complete"
                                checked={data.displayStatus === "complete"}
                                onChange={props.handleChange}
                            /> Complete
                        </label>
                        {/* ongoing */}
                        <label className="radio-choice">
                            <input 
                                type="radio" 
                                name="form-status"
                                value="ongoing"
                                checked={data.displayStatus === "ongoing"}
                                onChange={props.handleChange}
                            /> Ongoing
                        </label>
                        {/* hiatus */}
                        <label className="radio-choice">
                            <input 
                                type="radio" 
                                name="form-status"
                                value="hiatus"
                                checked={data.displayStatus === "hiatus"}
                                onChange={props.handleChange}
                            /> Hiatus
                        </label> <br /> <br />
                        {/* tags section */}
                        <label className="form-label" htmlFor="form-tags">Tags:</label>
                        {/* clear all tags button */}
                        <button 
                            form="filter-form" 
                            id="clear-button"
                            type="button"
                            name="clear-button"
                            value="clear"
                            onClick={props.handleChange}
                        >
                            Clear Tags
                        </button>
                        {/* tags display */}
                        <div className="form-tag-container">
                            {Object.keys(data.displayTags).map((item, i) => {
                                return (
                                <Fragment key={`formtag${i}`}>
                                    <label key={`checkbox-${item}`}className="checkbox-choice">
                                        <input 
                                            type="checkbox" 
                                            name="form-tags"
                                            value={item}
                                            checked={data.displayTags[item]}
                                            onChange={props.handleChange}
                                        /> {item}
                                    </label> <br />
                                </Fragment>)
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