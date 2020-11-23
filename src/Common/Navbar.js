import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <div className="topnav">
            <h3 className="brand" id="brand">Morning Star</h3>
            <Link to="/">
            <a className="active">Home</a>
            </Link>

            <Link to="/login">
            <a>Login</a>
            </Link>
            <Link to="/new">
            <a>Signup</a>
            </Link>
        </div>
    );
}

export default Navbar;