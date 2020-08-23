import React from 'react';
import '../LandingPage/LandingPage.css';

function LandingPage() {
    return (
            <div className="app landing-container">
                {/* <img src="/background/books.jpg" id="landingPage-bg" />
                <img src=''></img> */}
                <article className="landing-left">                    
                    <h1>N</h1>
                </article>
                <article className="landing-right">
                    <h2>ovel Editor</h2>
                </article>
                <article className="landing-right-1">
                    <h2> Make by GGwin </h2>
                </article>

                <article className="landing-side"> 
                    <span className="hexagon"> Novel Writer</span>
                    <span className="hexagon"> UI/UX </span>
                    <span className="hexagon"> Illustrations</span>
                    <span className="hexagon"> Setting</span>
                    <span className="hexagon"> Easy Use </span>
                </article>
            </div>
    )
}

export default LandingPage
