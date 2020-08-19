import React from 'react';

export default function menubar() {
    return (
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="/movies">Movies</a>
        <a className="dropdown-item" href="/series">Series</a>
        </div>
        </li>
        </ul>)
}