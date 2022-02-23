
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'





export default function Navbar(props) {

    return (

        <>

            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-primary" to="/">
                        {props.siteName}

                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/passwordgenerator">Passwordgenerator</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/randomuser">Randomuser</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/meme">Memes</Link>
                            </li>

                        </ul>


                        <div className={`custom-control custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                            <label className="custom-control-label" htmlFor="customSwitch1" onClick={props.toogleMode}>Enable {props.mode === 'light' ? 'dark' : 'light'}mod</label>
                        </div>

                    </div>



                </div>





            </nav>
        </>
    )
}

Navbar.propTypes = {
    siteName: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}


Navbar.defaultProps = {
    siteName: 'siteName',
    about: 'aboutMe'

}