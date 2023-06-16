import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";
import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errors, setErrors] = useState([]);
    
    // const sessionUser = useSelector(state => state.session.user);

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
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>

                <label>Email :  
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="Enter email"/>
                </label>
                <br></br>
                
                <label>Password :
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="Enter password"/>
                </label>

                <button type="submit">Log In</button>
            </form>
        </>
    );
}

export default LoginForm;