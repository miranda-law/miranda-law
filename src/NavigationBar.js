import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  return (
        <nav>
          <ul>
            <li><Link to="/miranda-law">Miranda Law</Link></li>
            <li className="right"><Link to="reads">Reading List</Link></li>
            <li className="right"><Link to="projects">Projects</Link></li>
            <li className="right"><Link to="/miranda-law">Home</Link></li>
          </ul>
        </nav>
  );
}

export default NavigationBar