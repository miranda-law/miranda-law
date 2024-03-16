import React from "react";
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="left-container">
                <h1 className="home-name">Miranda Law</h1>
            </div>
            <div className="right-container">
                <h2>About Me</h2>
                <p>Hello I'm Miranda!</p>
            </div>
        </div>
    );
}

export default Home;