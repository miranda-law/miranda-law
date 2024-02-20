import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Reads.css';
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
        const mangaItems = this.state.mangas.map(
            item => <MediaItem key={item.title} item={item} />
        );
        const manhwaItems = this.state.manhwas.map(
            item => <MediaItem key={item.title} item={item} />
        );
        const webtoonItems = this.state.webtoons.map(
            item => <MediaItem key={item.title} item={item} />
        );
        const manhuaItems = this.state.manhuas.map(
            item => <MediaItem key={item.title} item={item} />
        );
        const animeItems = this.state.animes.map(
            item => <MediaItem key={item.title} item={item} />
        );

        return (
            
            <Container fluid>
                <Row><h1 id="manga-header">Manga</h1></Row>
                <Row>{mangaItems}</Row>
                <Row><h1 id="manhwa-header">Manhwa</h1></Row>
                <Row>{manhwaItems}</Row>
                <Row><h1 id="webtoon-header">Webtoon</h1></Row>
                <Row>{webtoonItems}</Row>
                <Row><h1 id="manhua-header">Manhua</h1></Row>
                <Row>{manhuaItems}</Row>
                <Row><h1 id="anime-header">Anime</h1></Row>
                <Row>{animeItems}</Row>
            </Container>

        );
    }
}

export default Reads;