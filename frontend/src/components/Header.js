import React from 'react';
import {RiShareLine} from 'react-icons/ri';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header className="site-header">
           <nav className="navigation">
                <Link to="/" className="navigation__brand">
                    <h4>COVITRACKER</h4>
                </Link>
                <ul className="navigation__menu">
                     &nbsp;
                </ul>
                <div className="navigation__cat">
                    <a href="http://" className="navigation__cat--link" >
                        <RiShareLine />
                        Share 
                    </a>
                    <Link to="/donate" className="primary-button" >
                        Donate &rarr;
                    </Link>
                </div>
            </nav> 
        </header>
    )
}

export default Header;
