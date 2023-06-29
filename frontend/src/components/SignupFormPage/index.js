import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './SignupForm.css';

export default function SignupFormPage(props) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    // const[confirmPassword, setConfirmPassword] = useState('');
    const[errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

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
                At least 8 characters
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