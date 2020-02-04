import React from 'react';

import {Link} from 'react-router-dom';

const Navbar = (props) => (

    <nav>
        <h2 className="logo">{props.title}</h2>
           <ul className="nav-menu">
         <li><Link className="nav-menu__link" activeClassName="activate" exact to="/">Home</Link></li>

         <li><Link className="nav-menu__link" to="/actors">Best actors</Link></li>
        
         <li><Link className="nav-menu__link" to="/films">Best films</Link></li>
       
            </ul>
     </nav>

);

export default Navbar;