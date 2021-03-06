import React, { useState} from 'react'
import '../Signup/Signup.css';
import { SignupUser } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Signup(props) {

    // displayNoneEvent
    const [disNone, setDisNone] = useState(true);

    // Signup 
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
    

    // Login 

    const [LoginEmail, setLoginEmail] = useState('');

    const [LoginPassword, setLoginPassword] = useState('');

    const onLoginEmailHandler = (e) => {
        setLoginEmail(e.target.value);        
    }

    const onLoginPasswordHandler = (e) => {
        setLoginPassword(e.target.value);        
    }

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
                    if(response.payload.success){
                        console.log('success', response.payload.success)
                        props.history.push("/Success");
                    }else {
                        alert('Failed Sign up')
                    }
                })
        )
    }

    return (
        <section className="app main-container">            
        {/* left */}
            <article className="signup-article">
                <div className="signup-article-left">
                    {/* <img src={require('../Signup/signup_01.jpg')} /> */}
                    <form className="signup-login-form">
                        <table id="login-form">
                            <thead>
                                <tr>
                                    <th className="">Story Planet</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td className="bot-border">
                                        <input type="email" onChange={onLoginEmailHandler} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td className="bot-border">
                                        <input type="password" onChange={onLoginPasswordHandler} />
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <button type="button" id="login-btn" name="" className="btn" >Login</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button type="button" id="forgot-email" className="btn" >Forgot Email</button>
                                    </td>
                                    <td>                                        
                                        <button type="button" id="forgot-password" className="btn">Forgot Password</button>
                                    </td>
                                </tr>
                            
                            </tfoot>
                        </table>
                    </form>
                </div>
{/* right */}
                <div className="signup-article-right ">
                    <button type="button" id="view-sing-up" onClick={() => setDisNone(false)} className={(disNone ? '':'disNone')}>Do you want join Us?</button>
                    <form className={'signup-form-table '+ (disNone ? 'disNone':'flex') }  >
                        <table className="signup-form-table">
                            <thead>
                                <tr>
                                    <td>Don't have an account?</td>
                                    <td>Now Join Us</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Email
                                    </td>
                                    <td>
                                        <input type="text" onChange={onEmailHandler} placeholder="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Name
                                    </td>
                                    <td>
                                        <input type="text" onChange={onNameHandler} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        password
                                    </td>
                                    <td>
                                        <input type="text" onChange={onPasswordHandler} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        password Check
                                    </td>
                                    <td>
                                        <input type="text" onChange={onPasswordChkHandler} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Profile Image Upload
                                    </td>
                                    <td>
                                        <label htmlFor="profile-img-upload"> UPLOAD YOUR IMAGE
                                            <input type="file" id="profile-img-upload" style={{display:'none'}}/>
                                        </label>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <button type="button" className="btn" id="btn-signup" onClick={onSignUpSumbit}>Sign Up</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>                    
                    </form>
                </div>
            </article>
        </section>
    )
}

export default Signup
