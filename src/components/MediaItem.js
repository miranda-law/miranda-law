import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import allImages from "../data/readings/images/allImages";


function MediaItem(props) {
    const cardStyle = {
        width: "18rem",
        padding: "0",
        margin: "1rem"

    }
    const imgStyle = {
        width: "18rem",
        height: "10rem",
        objectFit: "cover"
    }

    return (
        <Card className="mediaItem" border="dark" style={cardStyle}>
            <Card.Img variant="top" src={allImages[props.item.imgLink]} style={imgStyle} />
            <Card.Body>
                <Card.Title>{props.item.title}</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>{props.item.status}</ListGroup.Item>
                <ListGroup.Item>{props.item.tags}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}



export default MediaItem;