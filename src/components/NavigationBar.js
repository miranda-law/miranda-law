import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {ReactComponent as HomeIcon} from '../assets/home.svg';
import {ReactComponent as IdeaIcon} from '../assets/idea.svg';
import {ReactComponent as BookIcon} from '../assets/book.svg';
import './NavigationBar.css';

function NavigationBar() {
  return (
        <nav>
          <ul>
            <li><Link to="/miranda-law">Miranda Law</Link></li>
            <li className="right" id="dropdown">
              <Link to="reads">
                <BookIcon />{' '}Reading List
              </Link>
              <div className="dropdown-content">
                <HashLink to="/miranda-law/reads#manga">Manga</HashLink>
                <HashLink to="/miranda-law/reads#manhwa">Manhwa</HashLink>
                <HashLink to="/miranda-law/reads#webtoon">Webtoon</HashLink>
                <HashLink to="/miranda-law/reads#manhua">Manhua</HashLink>
                <HashLink to="/miranda-law/reads#anime">Anime</HashLink>
              </div>
            </li>
            <li className="right">
              <Link to="projects">
                <IdeaIcon />{' '}Projects
              </Link>
            </li>
            <li className="right">
              <Link to="/miranda-law">
                <HomeIcon />{' '}Home
              </Link>
            </li>
          </ul>
        </nav>
  );
}

export default NavigationBar