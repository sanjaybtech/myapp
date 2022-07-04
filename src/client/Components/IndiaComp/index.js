import React from "react";
import "./style-ind.css";
import india from "./india.png"

const India = () => {
    return (

        <div>
            {/* <h1 className="heading-ind">India</h1> */}
            <img src={india} height="500px" />

            <div className="india-list">
                <ol id="ind-list">
                    <li>
                        Shubman Gill
                    </li>
                    <li>
                        Cheteshwar Pujara
                    </li>
                    <li>
                        Hanuma Vihari
                    </li>
                    <li>
                        Virat Kohli
                    </li>
                    <li>
                        Shreyas Iyer
                    </li>
                    <li>
                        Mohammed Siraj
                    </li>
                    <li>
                        Mohammed Shami

                    </li>
                    <li>
                        Shardul Thakur
                    </li>
                    <li>
                        Ravindra Jadeja
                    </li>
                    <li>
                        Rishabh Pant
                    </li>
                    <li>
                        Jasprit Bumrah

                    </li>
                </ol>
            </div>
        </div>
    );
}
export default India;