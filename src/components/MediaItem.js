import React from "react";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import { useRef, useEffect, useState } from "react";
import allImages from "../data/readings/images/allImages";
import './MediaItem.css';


function MediaItem(props) {
    // handle popup onclick
    const [lgShow, setLgShow] = useState(false);
    // css
    const cardStyle = {
        width: "18rem",
        padding: "0",
        marginLeft: "0.75rem",
        marginBottom: "0.75rem",
        cursor: "pointer",
    }
    const titleStyle = {
        margin:"0",
        whiteSpace: "nowrap",
        contain: "paint",
        overflowX: "auto"
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
    const modalStyleBg = {
        background: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(${allImages[props.item.imgLink]})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    // Status returns a Badge component depending on item status
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
    /* enables horizontal scroll using mouse scroll wheel */
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
        {/* Card */}
        <Card className="mediaItem" data-bs-theme="dark" border="secondary" style={cardStyle} onClick={() => setLgShow(true)}>
            <Card.Img variant="top" src={allImages[props.item.imgLink]} style={imgStyle} />
            <Card.Body style={{padding:"0.5rem"}}>
                <Card.Title 
                    style={titleStyle}
                    ref={useHorizontalScroll()}
                >
                        {props.item.title}
                </Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    Status: <Status />
                </ListGroup.Item>
                <ListGroup.Item ref={useHorizontalScroll()} style={tagStyle}>
                    {props.item.tags.map((item) => {
                            return <span className={item.replace(/ /g,'')}>{item}</span>
                    })}
                </ListGroup.Item>
            </ListGroup>
        </Card>
        {/* Card Popup */}
        <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="media-popup"
        >
            {/* Header and Title */}
            <Modal.Header closeButton>
                <Modal.Title id={props.item.title+"-media-popup"}>
                    {props.item.title}
                </Modal.Title>
            </Modal.Header>

            {/* Body content */}
            <Modal.Body style={modalStyleBg}>
                {/* alternate names row */}
                <Row>
                    <Col xs={6} md={4}>
                        {"Alternate name(s): "}
                    </Col>
                    <Col xs={12} md={8}>
                        {props.item.altNames.map((item) => {
                            return <><Row>{item}</Row></>
                        })}
                    </Col>
                </Row>
                <Row><br /></Row>
                {/* authors row */}
                <Row>
                    <Col xs={6} md={4}>
                        {"Author(s): "}
                    </Col>
                    <Col xs={12} md={8}>
                        {props.item.author.map((item) => {
                            return <><Row>{item}</Row></>
                        })}
                    </Col>
                </Row> 
                <Row><br /></Row>
                {/* Status row */}
                <Row>
                    <Col xs={6} md={4}>
                        {"Status: "}
                    </Col>
                    <Col xs={12} md={8}>
                        <Status />
                    </Col>
                </Row>
                <Row><br /></Row>
                {/* tags row */}
                <Row>
                    <Col xs={6} md={4}>
                        {"Tags: "}
                    </Col>
                    <Col xs={12} md={8}>
                        {props.item.tags.map((item) => {
                            return <span className={item.replace(/ /g,'')}>{item}</span>
                        })}
                    </Col>
                </Row>
                <Row><br /></Row>
                {/* official english link row*/}
                <Row>
                    <Col xs={6} md={4}>
                        {"Official English"}
                    </Col>
                </Row> <br />
                {/* comments row*/}
                <Row>
                    <Col xs={6} md={4}>
                        {"Comments: "}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {props.item.comments}
                    </Col>
                </Row> <br />
            </Modal.Body>
        </Modal>
        </>
    );
}



export default MediaItem;