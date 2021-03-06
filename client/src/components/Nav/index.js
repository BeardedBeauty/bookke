import React from "react";
import bookkes from "../../images/bookkes.jpg"
import "./style.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Nav(props) {

    return (
        <>
            <nav className="nav-wrapper green">
                <div className="wtf"></div>
                <a href="/" className="brand-logo">ßøôkké</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link to="/saved">saved</Link>
                    </li>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <h5>|</h5>
                    </li>
                    <li>
                        <a href="https://prtflo3.herokuapp.com/portfolio">portfolio</a>
                    </li>
                    <li>
                        <div className="wtf"></div>
                    </li>
                </ul>
            </nav>
            <div>
                <img src={bookkes} className="navimg" alt="bookkes" />
            </div>
        </>
    )
};

// onClick={() => props.request()}

export default Nav;