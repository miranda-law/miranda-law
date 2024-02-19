import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/miranda-law">Home</Link></li>
        <li><Link to="projects">Projects</Link></li>
        <li><Link to="reads">Reading List</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar