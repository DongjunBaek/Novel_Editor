import React from 'react';
import '../LandingPage/LandingPage.css';

function LandingPage() {
    return (
        <div className="app main-container">
            <img id="main-container-back-img" src={require('../LandingPage/img/back_01.jpg')} />
            <section className="landing-cotainer">
                <article className="landing-content-left">
                    <img src={require('../LandingPage/img/back_03.jpg')} />
                    <div className="content-left-div">
                        <span className="left-div-span-1"> Story Planet</span>
                        <span className="left-div-span-2"> UI/UX </span>
                        <span className="left-div-span-3"> Illustrations</span>
                        <span className="left-div-span-4"> Setting</span>
                        <span className="left-div-span-5"> Easy Use </span>
                    </div>
                </article>
                <article className="landing-content-right">

                </article>

                {/* <article className="landing-side"> 

                </article> */}
            </section>
        </div>
    )
}

export default LandingPage
