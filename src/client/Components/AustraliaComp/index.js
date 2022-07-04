import React from "react";
import "./style-aus.css";
import australia from "./australia.png"

const Australia = () => {
    return (

        <div>
            {/* <h1 className="heading-aus">Australia</h1> */}
            <img src={australia} height="500px" />

            <div className="australia-list">
                <ol id="aus-list">
                    <li>
                        Lee
                    </li>
                    <li>
                        Greg
                    </li>
                    <li>Ian</li>
                    <li>Alan</li>
                    <li>Bili</li>
                    <li>Graham</li>
                    <li>Ashley</li>
                    <li>Rod</li>
                    <li>Keith</li>
                    <li>Alan</li>
                    <li>Doug</li>
                </ol>
            </div>

        </div>
    );
}
export default Australia;