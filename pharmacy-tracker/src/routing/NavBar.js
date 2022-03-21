import React from 'react';
import {Link} from 'react-router-dom';

import Routing from './Routing';

const NavBar = () => {
  return (

    <nav className="navbar navbar-light bg-light">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link active" to={Routing.pharmacies}>
            Pharmacies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export {NavBar};
