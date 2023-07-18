import SignupFormPage from '../SignupFormPage'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Footer() {
    return (
        <footer>
            Copyright © 2023 Anthony Wong | All rights reserved | 
            <a href="https://www.linkedin.com/in/anthony-wong-26723813b/"> LinkedIn | 
            </a> 

            <a href="https://github.com/a-wong-8/Zillion"> GitHub    
            </a> 

            <Link to="/signuppage"> test</Link>
        </footer>
    )
}