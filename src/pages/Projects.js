import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectItem from "../components/ProjectItem";
import projectData from '../data/projects/project-list.json';
import allImages from "../data/projects/images/allImages";

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            projects: projectData
        };
    }
    render() {
        const projectItems = this.state.projects.map((item, i) => 
            <Row key={`project-row${i}`}>
                <ProjectItem 
                    dataKey={`project${i}`} 
                    item={item} 
                    imgLink={allImages[item.imgLink]} 
                />
            </Row>
        )
        return(
            <Container fluid style={{maxWidth: "60%"}}>
                <Row>
                    <h1 id="projects">Projects</h1>
                </Row> <br/>
                {projectItems}
            </Container>
        );
    }
}
export default Projects