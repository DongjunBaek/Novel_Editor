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
                    <span> 1 . Text Editor For Novel Writer</span>
                    <span> 2 . UI/UX design</span>
                    <span> 3 . Adding illustrations to character lines</span>
                    <span> 4 . Make Character Setting</span>
                    <span> 5 . Easy Use </span>
                </article>
            </div>
    )
}

export default LandingPage
