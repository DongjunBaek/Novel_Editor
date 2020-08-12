import React, { useState} from 'react'
import '../Signup/Signup.css';

function Signup() {

    const [Email, setEmail] = useState('')

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
        console.log(Email)
    };



    return (
        <section className="signup-section">
            <article className="signup-article">
                <div className="signup-container">
                    <from className="signup-form">
                        <div className="signup-form-input">
                            <ul>
                                <li>Email : <input type="text" onChange={onEmailHandler} /> </li>
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
