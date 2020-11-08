import React from 'react';
import landing_img from '../../../../src/images/bg.jpg';
// import '../LandingPage/LandingPage.css';

function LandingPage() {
    return (
        <section className="content-container"> 
            <img id="landing-img"  src={landing_img} />
            <article id="landing">
                <div>
                    <h1>
                        Welcome to My PortPolio Site
                    </h1>
                    <h5>
                        Use Novel Editor &nd Fantastic function
                    </h5>
                    <h5>
                        Use Novel Editor &nd Fantastic function
                    </h5>
                    <h5>
                        Use Novel Editor &nd Fantastic function
                    </h5>
                </div>
            </article>
        </section>
    )
}

export default LandingPage
