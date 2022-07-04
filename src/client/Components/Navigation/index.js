import React from "react";
import "./style-nav.css";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav class="nav-bar">
                <div className="logo">
                    <h1>CricInfo</h1>
                </div>
                <div className="menu">
                    <ul className="menu-list">
                        <li>
                            <Link className="link-head" to="/">India</Link>

                        </li>
                        <li>

                            <Link className="link-head nav-link" to="/australia">Australia</Link>
                        </li>
                        <li>

                            <Link className="link-head" to="/england">England</Link>

                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
}
export default Navbar;
