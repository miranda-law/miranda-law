import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';
import { useRef, useEffect, useState } from "react";
import allImages from "../data/readings/images/allImages";


function MediaItem(props) {
    const [lgShow, setLgShow] = useState(false);
    const cardStyle = {
        width: "18rem",
        padding: "0",
        marginLeft: "0.75rem",
        marginBottom: "0.75rem",
        cursor: "pointer"
    }
    const imgStyle = {
        width: "18rem",
        height: "10rem",
        objectFit: "cover"
    }
    const tagStyle = {
        whiteSpace: "nowrap",
        contain: "paint",
        overflowX: "auto"
    }
    function Status() {
        const stat = props.item.status;
        if(stat === "ongoing") {
            return (
                <Badge pill bg="primary">
                    ongoing
                </Badge>
            );
        } else if(stat === "complete") {
            return (
                <Badge pill bg="success">
                    complete
                </Badge>
            );
        } else {
            return(
                <Badge pill bg="secondary">
                    hiatus
                </Badge>)
            ;
        }
    }

    function useHorizontalScroll() {
        const elRef = useRef();
        useEffect(() => {
            const el = elRef.current;
            if (el) {
                const onWheel = e => {
                    if (e.deltaY === 0) return;
                        e.preventDefault();
                    el.scrollTo({
                        left: el.scrollLeft + e.deltaY,
                        behavior: "smooth"
                    });
                };
                el.addEventListener("wheel", onWheel);
                return () => el.removeEventListener("wheel", onWheel);
            }
        }, []);
        return elRef;
    }
    return (
        <>
        <Card className="mediaItem" data-bs-theme="dark" border="secondary" style={cardStyle} onClick={() => setLgShow(true)}>
            <Card.Img variant="top" src={allImages[props.item.imgLink]} style={imgStyle} />
            <Card.Body style={{padding:"0.5rem"}}>
                <Card.Title style={{margin:"0"}}>{props.item.title}</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    Status: <Status />
                </ListGroup.Item>
                <ListGroup.Item ref={useHorizontalScroll()} style={tagStyle}>
                    Tags: {props.item.tags.join(", ")}
                </ListGroup.Item>
            </ListGroup>
        </Card>
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="media-item-desc"
            
        >
            <Modal.Header closeButton>
            <Modal.Title id="media-item-desc">
                {props.item.title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Alternate names: {props.item.altNames.join("\n")} <br></br>
                Author: {props.item.author.join("\n")} <br></br>
                Official Link English <br></br>
                Comments: {props.item.comments} <br></br>
            </Modal.Body>
        </Modal>
        </>
    );
}



export default MediaItem;