import React from "react";
import "./style-eng.css";
import england from "./england.png";

const England = () => {
    return (

        <div>
            {/* <h1 className="heading-eng">England</h1> */}

<img src={england} width="500px" />
            <div className="england-list">
                <ol id="eng-list">
                    <li>
                        Matthew Pott
                    </li>
                    <li>
                        Ben Stokes
                    </li>
                    <li>
                        Jack
                    </li>
                    <li>
                        Harry
                    </li>
                    <li>
                        Joe
                    </li>
                    <li>
                        Jamie
                    </li>
                    <li>
                        Craig

                    </li>
                    <li>
                        Zak
                    </li>
                    <li>
                        Ben
                    </li>
                    <li>
                        Sam
                    </li>
                    <li>
                        Alex

                    </li>
                </ol>
            </div>

        </div>
    );
}
export default England;