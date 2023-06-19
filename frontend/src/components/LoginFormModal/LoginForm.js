import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        return dispatch(sessionActions.login({email, password}))

        .catch(async (res) => {
            let data;
            
            try {
              data = await res.clone().json();
            } catch {
              data = await res.text(); 
            }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
          });
    }

    return (
        <>
            <div className="x">X</div>
            <h1>Welcome to Zillion</h1>

            <div className="new-account-link">
                <h4>Sign in</h4>

                <h5><NavLink to="/signup" activeClassName="active-link">New account</NavLink></h5>
            </div>

            <form onSubmit={handleSubmit}>

                <label className="email">Email
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="Enter email"/>
                </label>

                <br></br>

                    <label className="password" for="input-box">Password
                        <input id="input-box" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="Enter password"/>
                    </label>

                <br></br>

                <div className="button-container">
                    <button type="submit" className="button">Sign in</button>
                </div>

                <ul className="errors">
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>

            </form>
        </>
    );
}

export default LoginForm;