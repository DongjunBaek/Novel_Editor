import React, { useState} from 'react'
import '../Signup/Signup.css';
import { SignupUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

function Signup() {

    const [Email, setEmail] = useState('');
    
    const [Name, setName] = useState('');

    const [Password, setPassword] = useState('');

    const [PasswordChk, setPasswordChk] = useState('');

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
        console.log(Email)
    };
    const onNameHandler = (e) => {
        setName(e.target.value);
        console.log(Name)
    };
    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
        console.log(Password)
    };
    const onPasswordChkHandler = (e) => {
        setPasswordChk(e.target.value);
        console.log(PasswordChk)
    };
    
    const dispatch = useDispatch();

    const onSignUpSumbit = () => {
        let body = {
            email : Email,
            name : Name,
            password : Password
        }

        
        // console.log('Input values', body)
        return (
                dispatch(SignupUser(body)).then(response => {
                    console.log(response.payload)
                })
        )
    }


    return (
        <section className="signup-section">
            <article className="signup-article">
                <div className="signup-container">
                    <form className="signup-form">
                        <div className="signup-form-input">
                            <ul>
                                <li>Email : <input type="text" onChange={onEmailHandler} /> </li>
                                <li>Name : <input type="text" onChange={onNameHandler} /></li>
                                <li>password  : <input type="password" onChange={onPasswordHandler} /></li>
                                <li>password Check  : <input type="password" onChange={onPasswordChkHandler} /></li>
                            </ul>
                        </div>
                        <div className="signup-form-preview">
                            <ul>
                                <li><img src="" /></li>
                                <li> Profile Image Upload --> <input type="file" /></li>
                                <li><button type="button" onClick={onSignUpSumbit}>Sign Up</button></li>
                            </ul>
                        </div>
                    
                    </form>
                </div>
            </article>
        </section>
    )
}

export default Signup
