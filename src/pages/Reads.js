import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MediaItem from "../components/MediaItem";
import mangaData from '../data/readings/mangaData';
import manhwaData from '../data/readings/manhwaData';
import webtoonData from '../data/readings/webtoonData';
import manhuaData from '../data/readings/manhuaData';
import animeData from '../data/readings/animeData';


class Reads extends React.Component {
    constructor() {
        super()
        this.state = {
            mangas: mangaData,
            manhwas: manhwaData,
            webtoons: webtoonData,
            manhuas: manhuaData,
            animes: animeData
        }
    }
    render() {
        const manhuaItems = this.state.manhuas.map(
            item => <MediaItem key={item.title} item={item} />
        );

        return (
            <div className="reads-container">
                Reading List
                {/* {manhuaItems} */}

                <Row xs={1} md={4} className="g-4">
                    {manhuaItems}
                    {/* {Array.from({ length: manhuaItems.length }).map((_, idx) => (
                        <Col key={idx}>
                            {manhuaItems}
                        </Col>
                    ))} */}
                </Row>
            </div>
        );
    }
    
}

export default Reads