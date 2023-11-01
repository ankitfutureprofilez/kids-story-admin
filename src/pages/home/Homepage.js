import React from "react";
import { Link } from "react-router-dom";


function Homepage() {
    return (
        <>
         
            <div className="content-wrapper">
                {/* start content */}
                <div className="content content-center generat-story">
                    <div className="generate-block">
                        <div>
                            <h2>StoryScape!</h2>
                            <h1>Create a Magical Bedtime Story for Kids</h1>
                            <Link to="#" className="btn blue-gradient-btn"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                <path d="M4.75 6.75H0.25V5.25H4.75V0.75H6.25V5.25H10.75V6.75H6.25V11.25H4.75V6.75Z" fill="white" />
                            </svg> Generate Story</Link>
                        </div>
                    </div>
                </div>
                {/* start content*/}
            </div>


        </>);
}

export default Homepage;