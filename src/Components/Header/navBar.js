import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import logo from '../Vetri Technology Solutions_files/vetrilogo.8f5df87fe97371e066e4.jpg';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const megaMenuRef = useRef(null); // Create a reference for the mega menu

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleMegaMenu = () => {
    setMegaMenuOpen(!isMegaMenuOpen);
  };

  const handleLinkClick = (event) => {
    event.preventDefault();
    setMegaMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='fixed-top'>
      <div className="navbar">
        <div className="containers"> 
          <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
            <img src={logo} alt="Logo" />
          </Link>

          <div className="menu-icon" onClick={toggleMenu}>
            <div className={`bar1 ${isMenuOpen ? 'change' : ''}`}></div>
            <div className={`bar2 ${isMenuOpen ? 'change' : ''}`}></div>
            <div className={`bar3 ${isMenuOpen ? 'change' : ''}`}></div>
          </div>

          <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleLinkClick}>
                VTS PROCESS
              </Link>
            </li>
            <li className="nav-item" ref={megaMenuRef}> 
              <span className="nav-link dropdown-toggle" onClick={toggleMegaMenu}>
                OUR TRAININGS
              </span>
              <div className={`mega-menu ${isMegaMenuOpen ? 'open' : ''}`}> 
                <div className="mega-menu-column">
                  <h3>CODING</h3>
                  <div>
                    <ol>
                      <li><Link to="/training-details/2" className="dropdown-item" onClick={handleLogoClick}>Front End Developer</Link></li>
                      <li><Link to="/training-details/12" className="dropdown-item"onClick={handleLogoClick}>Back End Developer(Python)</Link></li>
                      <li><Link to="/training-details/13" className="dropdown-item"onClick={handleLogoClick}>Back End Developer(Node)</Link></li>
                      <li><Link to="/training-details/14" className="dropdown-item" onClick={handleLogoClick}>Back End Developer(Java)</Link></li>
                      <li><Link to="/training-details/1" className="dropdown-item" onClick={handleLogoClick}>MERN Stack Developer</Link></li>
                      <li><Link to="/training-details/3" className="dropdown-item" onClick={handleLogoClick}>Python Full Stack</Link></li>
                      <li><Link to="/training-details/4" className="dropdown-item" onClick={handleLogoClick}>Java Full Stack</Link></li>
                      <li><Link to="/training-details/5" className="dropdown-item" onClick={handleLogoClick}>Mobile App Development</Link></li>
                      <li><Link to="/training-details/9" className="dropdown-item" onClick={handleLogoClick}>Data Analytics</Link></li>
                      <li><Link to="/training-details/8" className="dropdown-item" onClick={handleLogoClick}>Data Science</Link></li>
                    </ol>
                  </div>

                  <h3>NON-CODING</h3>
                  <div>
                    <ol>
                      <li><Link to="/training-details/11" className="dropdown-item" onClick={handleLogoClick}>UI / UX Design</Link></li>
                      <li><Link to="/training-details/7" className="dropdown-item" onClick={handleLogoClick}>Digital Marketing</Link></li>
                      <li><Link to="/training-details/10" className="dropdown-item" onClick={handleLogoClick}>Software Testing</Link></li>
                      <li><Link to="/training-details/6" className="dropdown-item" onClick={handleLogoClick}>AWS</Link></li>
                      <li><Link to="/training-details/15" className="dropdown-item" onClick={handleLogoClick}>Business Analytics</Link></li>
                    </ol>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/careers" className="nav-link">CAREERS</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
