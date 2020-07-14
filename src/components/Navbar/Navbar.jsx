import React from 'react';
import './Navbar.css';
import { Link, withRouter } from 'react-router-dom';

const Navbar = ({ location }) => {
  const { pathname } = location;
  const active = pathname === '/estadisticas';

  return (
    <nav className='navbar'>
      <ul className={`navbar-nav ${active ? 'active' : ''}`}>
        <li className='nav-title'>
          <Link to='/' className='nav-title-link'>
            <h3>COVID-19 MX</h3>
          </Link>
        </li>

        <li className='nav-item'>
          {active ? (
            <Link to='/' className='nav-link'>
              <span className='arr-ico'>&larr;</span> Regresar
            </Link>
          ) : (
            <Link to='/estadisticas' className='nav-link'>
              Estadísticas por estado <span className='arr-ico'>&rarr;</span>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
