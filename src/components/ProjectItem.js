import React from "react";
import {ReactComponent as External} from '../assets/external.svg';
import "./ProjectItem.css";

function ProjectItem(props) {
    const data = props.item;
    const k = props.dataKey;
    return (
        <div className="project-item-container">
            <div className="img-container" style={{float:"left"}}>
                <img 
                    src={props.imgLink} 
                    style={{
                        width:"15rem", 
                        height:"10rem", 
                        marginRight:"1.5rem"
                    }}
                />
            </div>
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