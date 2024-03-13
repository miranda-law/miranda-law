import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Reads.css';
import MediaItem from "../components/MediaItem";
import FormComponent from "../components/FormComponent";
import mangaData from '../data/readings/mangaData';
import manhwaData from '../data/readings/manhwaData';
import webtoonData from '../data/readings/webtoonData';
import manhuaData from '../data/readings/manhuaData';
import animeData from '../data/readings/animeData';
import allTags from "../data/readings/readingListTags";
import allImages from "../data/readings/images/allImages";

class Reads extends React.Component {
    constructor() {
        super();
        this.state = {
            mangas: mangaData,
            manhwas: manhwaData,
            webtoons: webtoonData,
            manhuas: manhuaData,
            animes: animeData,
            displayStatus: "all",
            displayTags: {}
        };
        this.handleChange = this.handleChange.bind(this);
        // set up displayTags
        let tempTags = {};
        allTags.forEach((item) => {
            tempTags[item] = false;
        });
        this.state.displayTags = tempTags;
        
    }
    
    handleChange(event) {
        const {value, type} = event.target;
        let updatedMangas = mangaData;
        let updatedManhwas = manhwaData;
        let updatedWebtoons = webtoonData;
        let updatedManhuas = manhuaData;
        let updatedAnimes = animeData;
        if(type === "radio") {
            // update new status
            this.setState({displayStatus: value});
            // identify valid tags
            const validTags = Object.keys(this.state.displayTags).filter(item => this.state.displayTags[item]);
            // filter by tags
            if(validTags.length > 0) {
                updatedMangas = updatedMangas.filter(
                item => item.tags.filter(value => validTags.includes(value)).length === validTags.length
                );
                updatedManhwas = updatedManhwas.filter(
                    item => item.tags.filter(value => validTags.includes(value)).length === validTags.length
                );
                updatedWebtoons = updatedWebtoons.filter(
                    item => item.tags.filter(value => validTags.includes(value)).length === validTags.length
                );
                updatedManhuas = updatedManhuas.filter(
                    item => item.tags.filter(value => validTags.includes(value)).length === validTags.length
                );
                updatedAnimes = updatedAnimes.filter(
                    item => item.tags.filter(value => validTags.includes(value)).length === validTags.length
                );
            }
            // filter by status and set state
            if(value === "all") {
                this.setState({
                    mangas: updatedMangas,
                    manhwas: updatedManhwas,
                    webtoons: updatedWebtoons,
                    manhuas: updatedManhuas,
                    animes: updatedAnimes
                })
            } else {
                this.setState({
                    mangas: updatedMangas.filter(item => item.status === value),
                    manhwas: updatedManhwas.filter(item => item.status === value),
                    webtoons: updatedWebtoons.filter(item => item.status === value),
                    manhuas: updatedManhuas.filter(item => item.status === value),
                    animes: updatedAnimes.filter(item => item.status === value)
                })
            }

        } else if (type === "checkbox") {
            this.setState(prevState => {
                // update valid tags
                const updatedTags = prevState.displayTags;
                updatedTags[value] = !prevState.displayTags[value];
                // identify valid tags
                const validTags = Object.keys(updatedTags).filter(item => this.state.displayTags[item]);
                // filter by status
                if(prevState.displayStatus !== "all") {
                    updatedMangas = updatedMangas.filter(item => item.status === prevState.displayStatus);
                    updatedManhwas = updatedManhwas.filter(item => item.status === prevState.displayStatus);
                    updatedWebtoons = updatedWebtoons.filter(item => item.status === prevState.displayStatus);
                    updatedManhuas = updatedManhuas.filter(item => item.status === prevState.displayStatus);
                    updatedAnimes = updatedAnimes.filter(item => item.status === prevState.displayStatus);
                }
                // filter by tags and set state
                if(validTags.length > 0) {
                    return {
                        displayTags: updatedTags,
                        mangas: updatedMangas.filter(
                            item => item.tags.filter(value => validTags.includes(value)).length === validTags.length
                        ),
                        manhwas: updatedManhwas.filter(
                            item => item.tags.filter(value => validTags.includes(value)).length === validTags.length
                        ),
                        webtoons: updatedWebtoons.filter(
                            item => item.tags.filter(value => validTags.includes(value)).length === validTags.length
                        ),
                        manhuas: updatedManhuas.filter(
                            item => item.tags.filter(value => validTags.includes(value)).length === validTags.length
                        ),
                        animes: updatedAnimes.filter(
                            item => item.tags.filter(value => validTags.includes(value)).length === validTags.length
                        )
                    };
                } else { // no tags to filter
                    return {
                        displayTags: updatedTags,
                        mangas: updatedMangas,
                        manhwas: updatedManhwas,
                        webtoons: updatedWebtoons,
                        manhuas: updatedManhuas,
                        animes: updatedAnimes
                    }
                }
            })
        } else if(type === "button") {
            // remove all tags
            let tempTags = {};
            allTags.forEach((item) => {tempTags[item] = false;})
            // filter by status and set state
            if(this.state.displayStatus === "all") {
                this.setState({
                    mangas: mangaData,
                    manhwas: manhwaData,
                    webtoons: webtoonData,
                    manhuas: manhuaData,
                    animes: animeData,
                    displayTags: tempTags
                })
            } else {
                this.setState({
                    mangas: mangaData.filter(item => item.status === this.state.displayStatus),
                    manhwas: manhwaData.filter(item => item.status === this.state.displayStatus),
                    webtoons: webtoonData.filter(item => item.status === this.state.displayStatus),
                    manhuas: manhuaData.filter(item => item.status === this.state.displayStatus),
                    animes: animeData.filter(item => item.status === this.state.displayStatus),
                    displayTags: tempTags
                })
            }
        }

    }
    render() {

        const mangaItems = this.state.mangas.map((item, i) => 
            <MediaItem 
                key={`manga${i}`} 
                dataKey={`manga${i}`} 
                item={item} 
                imgLink={allImages[item.imgLink]} 
            />
        );
        const manhwaItems = this.state.manhwas.map((item, i) => 
            <MediaItem 
                key={`manhwa${i}`} 
                dataKey={`manhwa${i}`} 
                item={item} 
                imgLink={allImages[item.imgLink]} 
            />
        );
        const webtoonItems = this.state.webtoons.map((item, i) => 
            <MediaItem 
                key={`webtoon${i}`} 
                dataKey={`webtoon${i}`} 
                item={item} 
                imgLink={allImages[item.imgLink]} 
            />
        );
        const manhuaItems = this.state.manhuas.map((item, i) => 
            <MediaItem 
                key={`manhua${i}`} 
                dataKey={`manhua${i}`} 
                item={item} 
                imgLink={allImages[item.imgLink]} 
            />
        );
        const animeItems = this.state.animes.map((item, i) => 
            <MediaItem 
                key={`anime${i}`} 
                dataKey={`anime${i}`} 
                item={item} 
                imgLink={allImages[item.imgLink]} 
            />
        );

        return (
            
            <Container fluid>
                <Row><h1 id="manga">Manga</h1></Row>
                <Row>{mangaItems}</Row> <br />
                <Row><h1 id="manhwa">Manhwa</h1></Row>
                <Row>{manhwaItems}</Row> <br />
                <Row><h1 id="webtoon">Webtoon</h1></Row>
                <Row>{webtoonItems}</Row> <br />
                <Row><h1 id="manhua">Manhua</h1></Row>
                <Row>{manhuaItems}</Row> <br />
                <Row><h1 id="anime">Anime</h1></Row>
                <Row>{animeItems}</Row>
                <FormComponent 
                    item={this.state} 
                    handleFormStatus={this.handleFormStatus}
                    handleFormTags={this.handleFormTags}
                    handleChange={this.handleChange}
                />
            </Container>

        );
    }
}

export default Reads;