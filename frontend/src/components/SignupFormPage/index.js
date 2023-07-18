import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './SignupForm.css';

export default function SignupFormPage(props) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errors, setErrors] = useState([]);

    const[characters, setCharacters] = useState(false);
    const[specialChar, setSpecialChar] = useState(false);
    const[upper, setUpper] = useState(false);
    const[lower, setLower] = useState(false);
    const[number, setNumber] = useState(false);

    const special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    const uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowers = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';

    useEffect(()=> {
      passwordChecker()
    },[password, characters])

    const passwordChecker = () => {
      if (password.length >= 8) setCharacters(true)
      else setCharacters(false)

        for (let i = 0; i < password.length; i++) {
          if (special.includes(password[i])) setSpecialChar(true)
          if (uppers.includes(password[i])) setUpper(true);
          if (lowers.includes(password[i])) setLower(true);
          if (numbers.includes(password[i])) setNumber(true);
        }
        if (password.length === 0) {
          setSpecialChar(false)
          setUpper(false);
          setLower(false);
          setNumber(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

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

    return (
        <>
        <h1>Welcome to Zillion</h1>

        <div className="signin-link">
          <h4><a activeClassName="active-link">Sign in</a></h4>

          <h5>New account</h5>
        </div>

        <form id="login-form" onSubmit={handleSubmit}>

              <ul className="errors1">
                {errors.map((error) => <li key={error}>{error}</li>)}
              </ul>

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
                {characters? <span id="green">✔︎ At least 6 characters</span> : 'At least 8 characters'}
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

            {/* <label>Confirm Password 
                <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required placeholder="Confirm password"/>
              </label> */}

            <button type="submit" className="button">Submit</button>
            <p className="terms">
              By submitting, I accept Zillion's term of use.
            </p>
        
        </form>
        </>
    )
}