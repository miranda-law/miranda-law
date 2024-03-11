import React from "react";
import {ReactComponent as External} from '../assets/external.svg';
import "./ProjectItem.css"

function ProjectItem(props) {
    const data = props.item;
    const k = props.dataKey;
    return (
        <div className="project-item-container">
            <a href={data.link} target="_blank" rel="noreferrer">
                <h2 className="project-title">
                    {data.project} {" "}
                    <External className="funnel" />
                </h2>
                </a>
                <p className="project-desc">{data.description}</p>
                <div className="project-stack-container">
                    {data.stack.map((item, i) => {
                        return (
                            <span className="stack-tag" key={`${k}_tag${i}`}>
                                {item}
                            </span>  
                        )
                    })}
                </div>
            
        </div>
    );
}

export default ProjectItem;