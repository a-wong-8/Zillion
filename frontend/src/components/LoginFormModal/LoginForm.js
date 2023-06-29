import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errors, setErrors] = useState([]);

    const[signIn, setSignIn] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        if (signIn) {
            
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
        } else {
            if (password) {
                setErrors([]);
                return dispatch(sessionActions.signup({ email, password }))
    
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
              return setErrors(['Confirm Password requirements']);
        }
    }

    function guest () {
      const email = "demo@user.io";
      const password = "password";
      return dispatch(sessionActions.login({ email, password }));
    }

    if (signIn) {
      return (
        <>
            <h1>Welcome to Zillion</h1>

            <div className="new-account-link">
                <h4>Sign in</h4>
             
                <h5><a onClick={()=>setSignIn(false)} className="active-link">New account</a></h5>
            </div>

            <form id="login-form" onSubmit={handleSubmit}>

                <label className="email">Email
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="Enter email"/>
                </label>
                <br></br>

                    <label className="password" >Password
                        <input id="input-box" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="Enter password"/>
                    </label>
                <br></br>

                <div className="button-container">
                    <button type="submit" className="button">Sign in</button>
                </div>

                <a className="guest" onClick={()=>guest()}>Sign in as guest</a>

                <ul className="errors">
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>

            </form>
        </>
    );
      } else {
        return (
            <>
        <h1>Welcome to Zillion</h1>

        <div className="signin-link">
          <h4><a onClick={()=>setSignIn(true)} className="active-link">Sign in</a></h4>

          <h5>New account</h5>
        </div>

        <form id="login-form" onSubmit={handleSubmit}>

            <label className="email">Email 
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="Enter email"/>
            </label>
            <br></br>

            <label className="password">Password
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="Create password"/>
            </label>

            <div className="reqs-container">
            <ul className="reqs">
              <li>
                At least 6 characters
              </li>
              <li>
                Mix of letters and numbers
              </li>
              <li>
                At least 1 special character 
              </li>
              <li>
                At least 1 lowercase letter and 1 uppercase letter
              </li>
            </ul>
            </div>

            <ul className="errors">
              {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>

            <button type="submit" className="button">Submit</button>
            <p className="terms">
              By submitting, I accept Zillion's term of use.
            </p>
        </form>
        </>
        );
      }
}

export default LoginForm;