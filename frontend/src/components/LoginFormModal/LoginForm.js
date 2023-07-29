import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errors, setErrors] = useState([]);
    const[signIn, setSignIn] = useState(true);

    const[characters, setCharacters] = useState(false);
    const[specialChar, setSpecialChar] = useState(false);
    const[upper, setUpper] = useState(false);
    const[lower, setLower] = useState(false);
    const[number, setNumber] = useState(false);

    const special = /[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    const uppers = /[A-Z]/g;
    const lowers = /[a-z]/g;
    const numbers = /[0-9]/g;

    useEffect(()=> {
      passwordChecker()
      setErrors([])
    },[password, characters])

    const passwordChecker = () => {
      if (password.length >= 6) setCharacters(true);
      else setCharacters(false);

      if (password.match(uppers)) setUpper(true);
      else setUpper(false);

      if (password.match(lowers)) setLower(true);
      else setLower(false);

      if (password.match(numbers)) setNumber(true);
      else setNumber(false);

      if (password.match(special)) setSpecialChar(true);
      else setSpecialChar(false);        
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (signIn) {
          setErrors([]);
          return dispatch(sessionActions.login({email, password}))

        .catch(async (res) => {
            let data;
            
            try {
              data = await res.clone().json();
            } catch(error) {
              // window.alert('Invalid credentials.')
              return setErrors(['Invalid credentials'])
              // data = await res.text(); 
            }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);

          });
        } else {
            if (characters && specialChar && upper && lower && number) {
                setErrors([]);
                return dispatch(sessionActions.signup({ email, password }))
                
                .catch(async (res) => {
                  let data;
                  try {
                    data = await res.clone().json();
                  } catch {
                    // window.alert('Invalid email.')
                    return setErrors(['Invalid email'])
                    // data = await res.text();
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
                    <button type="submit" className="signin-button">Sign in</button>
                </div>
                <ul className="errors">
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>

                <a className="guest" onClick={()=>guest()}>Sign in as guest</a>

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
                {characters? <span id="green">✔︎ At least 6 characters</span> : 'At least 6 characters'}              
              </li>
              <li>
                {number && upper && lower ? <span id="green">✔︎ Mix of letters and numbers</span> : 'Mix of letters and numbers' }               
              </li>
              <li>
                {specialChar? <span id="green">✔︎ At least 1 special character</span> : 'At least 1 special character'} 
              </li>
              <li>
                {upper && lower ? <span id="green">✔︎ At least 1 lowercase letter & 1 uppercase letter</span> : 'At least 1 lowercase letter & 1 uppercase letter'}
              </li>
            </ul>
            </div>


            <button type="submit" className="signin-button">Submit</button>
            <ul className="errors">
              {errors.map((error) => <li key={error}>{error}</li>)}
            </ul>
            <p className="terms">
              By submitting, I accept Zillion's term of use.
            </p>
        </form>
        </>
        );
      }
}

export default LoginForm;