import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavigationBar.css';

function NavigationBar() {
  return (
        <nav>
          <ul>
            <li><Link to="/miranda-law">Miranda Law</Link></li>
            <li className="right" id="dropdown">
              <Link to="reads">Reading List</Link>
              <div className="dropdown-content">
                <HashLink to="/miranda-law/reads#manga-header">Manga</HashLink>
                <HashLink to="/miranda-law/reads#manhwa-header">Manhwa</HashLink>
                <HashLink to="/miranda-law/reads#webtoon-header">Webtoon</HashLink>
                <HashLink to="/miranda-law/reads#manhua-header">Manhua</HashLink>
                <HashLink to="/miranda-law/reads#anime-header">Anime</HashLink>
              </div>
            </li>
            <li className="right"><Link to="projects">Projects</Link></li>
            <li className="right"><Link to="/miranda-law">Home</Link></li>
          </ul>
        </nav>
  );
}

export default NavigationBar