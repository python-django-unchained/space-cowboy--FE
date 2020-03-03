import React from 'react'
import {Link} from 'react-router-dom'

export default function LandingPage() {

    return (
        <div className='landing-page'>
            <h1 className='title-box'>
                SPACE COWBOY
            </h1>
            <div className='login-box'>
                <h3>
                  <Link className='login-link' to='/login'>Login</Link> here!
                </h3>
                <h4>Don't have an account?
                    <br/>
                    <Link className='login-link' to='signup'>Sign Up now! </Link>
                </h4>
            </div>
        </div>
    );
}