import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-title'>
          <Link to='/' className='nav-title-link'>
            <h3>COVID-19 MX</h3>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/stats' className='nav-link'>
            Estadísticas por estado <span className='arr-ico'>&#8594;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
