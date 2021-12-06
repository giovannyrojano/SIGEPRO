import React from "react";

import { Link } from "react-router-dom";

const Header = () => {

    // return <button ="clase">HOla {name}</button>;

    //  return <button type="button" ="btn btn-primary">Primary {name}</button>;
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light shadow' style={{ margin: 10 }}>
            <div className='container-fluid'>

                <div className='navbar-brand'>
                    Guerrilla Games
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id='navbarSupportedContent' className='collapse navbar-collapse'>

                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/" style={{ padding: 5 }}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/about" style={{ padding: 5 }}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/project" style={{ padding: 5 }}>
                                proyectos
                            </Link>

                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/posts" >Action</Link></li>
                                <li><Link className="dropdown-item" to="/posts">Another action</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="dropdown-item" to="/posts" >Something else here</Link></li>
                            </ul>
                        </li>

                    </ul>

                    <div className='d-flex'>
                        <button className="btn btn-outline-success" type="submit">Login</button>
                    </div>

                </div>




            </div>

        </nav>
    );

};
export default Header;
