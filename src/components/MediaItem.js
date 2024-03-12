import React, {Fragment} from "react";
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useRef, useEffect, useState } from "react";
import {ReactComponent as External} from '../assets/external.svg';
import './MediaItem.css';



function MediaItem(props) {
    //props
    const data = props.item;
    const k = props.dataKey; 
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
        overflowX: "auto",
        overflowY: "hidden",
        paddingLeft: "0.5rem"
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
        background: `linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url(${props.imgLink})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
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
            <Card 
                className="mediaItem" 
                data-bs-theme="dark" 
                border="secondary" 
                style={cardStyle} 
                onClick={() => setLgShow(true)}
            >
                {/* Card image */}
                <Card.Img 
                    variant="top" 
                    src={props.imgLink} 
                    style={imgStyle} 
                />
                {/* Card title */}
                <Card.Body style={{padding:"0.5rem"}}>
                    <Card.Title 
                        style={titleStyle}
                        ref={useHorizontalScroll()}
                    >
                            {data.title}
                    </Card.Title>
                </Card.Body>
                <ListGroup variant="flush">
                    {/* Card status */}
                    <ListGroup.Item>
                        Status:
                        <span 
                            className={data.status} 
                            style={{marginLeft:"0.5rem"}}
                        >
                            {data.status}
                        </span>
                    </ListGroup.Item>
                    {/* Card tags */}
                    <ListGroup.Item 
                        ref={useHorizontalScroll()} 
                        style={tagStyle}
                    >
                        {data.tags.map((item, i) => {
                                return (
                                    <Fragment key={`${k}_cardtag${i}`}>
                                        <span 
                                            className={item.replace(/ /g,'')}
                                        >
                                            {item}
                                        </span> {' '}
                                    </Fragment>
                                );
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
                    <Modal.Title id={k+"-media-popup"}>
                        {data.title}
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
                            {data.altNames.map((item, i) => {
                                return (
                                    <Row key={`${k}-altname${i}`}>{item}</Row>
                                );
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
                            {data.author.map((item,i) => {
                                return (
                                    <Row key={`${k}-author${i}`}>{item}</Row>
                                );
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
                            <span className={data.status}>
                                {data.status}
                            </span>
                        </Col>
                    </Row>
                    <Row><br /></Row>
                    {/* tags row */}
                    <Row>
                        <Col xs={6} md={4}>
                            {"Tags: "}
                        </Col>
                        <Col xs={12} md={8}>
                            {data.tags.map((item, i) => {
                                return (
                                    <Fragment key={`${k}_cardtag${i}`}>
                                        <span 
                                            className={item.replace(/ /g,'')}
                                        >
                                            {item}
                                        </span> {' '}
                                    </Fragment>
                                );
                            })}
                        </Col>
                    </Row>
                    <Row><br /></Row>
                    {/* official english link row*/}
                    <Row>
                        <Col xs={6} md={4}>
                            {
                                data.officialEn === "#" || data.officialEn === ""
                                ?
                                    <a 
                                        className="enLinkDisabled" 
                                        href={data.officialEn}
                                        target="_blank"
                                        onClick={(event) => event.preventDefault()}
                                    >
                                        {"Official English "}
                                        <External />
                                    </a>
                                :
                                <a 
                                    className="enLink" 
                                    href={data.officialEn}
                                    target="_blank"
                                >
                                    {"Official English "}
                                    <External />
                                </a>
                            }
                        </Col>
                    </Row> <br />
                    {/* comments title row*/}
                    <Row>
                        <Col xs={6} md={4}>
                            {"Comments: "}
                        </Col>
                    </Row>
                    {/* comments row*/}
                    <Row>
                        <Col>
                            {data.comments}
                        </Col>
                    </Row> <br />
                </Modal.Body>
            </Modal>
        </>
    );
}



export default MediaItem;