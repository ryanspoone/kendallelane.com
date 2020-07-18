import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const TopBar = () => (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 fixed-top bg-transparent topnav">
        <NavLink className="my-0 mr-md-auto text-dark" to="/home">
            Kendall E Lane
        </NavLink>
        <nav className="my-2 my-md-0 mr-md-3">
            <NavLink className="p-2 text-dark" to="/info" activeClassName="p-2 text-dark active">
                Info
            </NavLink>
            <Link className="p-2 text-dark" to="#">
                Shop
            </Link>
        </nav>
    </div>
);

export default TopBar;
