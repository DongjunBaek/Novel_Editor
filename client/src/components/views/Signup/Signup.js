import React from 'react'
import '../Signup/Signup.css';

function Signup() {




    return (
        <section className="signup-section">
            <article className="signup-article">
                <div className="signup-container">
                    <from className="signup-form">
                        <div className="signup-form-input">
                            <ul>
                                <li>Email : <input type="text" /> </li>
                                <li>Name : <input type="text" /></li>
                                <li>password  : <input type="password" /></li>
                                <li>password Check  : <input type="password" /></li>
                            </ul>
                        </div>
                        <div className="signup-form-preview">
                            <ul>
                                <li><img src="" /></li>
                                <li> Profile Image Upload --> <input type="file" /></li>
                            </ul>
                        </div>
                    </from>
                </div>
            </article>
        </section>
    )
}

export default Signup
