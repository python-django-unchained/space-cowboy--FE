import {Link} from 'react-router-dom'
import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { Form } from 'react-bootstrap';
import axios from 'axios';


const ColorButton = withStyles(theme => ({
    root: {
        backgroundColor: 'blue',
    },
}))(Button);

export default function LandingPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const authOptions = {
        method: 'POST',
        url: 'https://cors-anywhere.herokuapp.com/https://lambda-mud-test.herokuapp.com/api/login',
        data: {username: username, password: password},
        headers: {
            "Content-Type": "application/json"
        }
    }

    const handleLogin = e => {
        e.preventDefault()
        axios(authOptions)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }

    return (
        <div className='landing-page'>
            <h1 className='title-box'>
                SPACE COWBOY
            </h1>
            <Form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: 'white' }}>Login</h1>
                <Form.Label style={{ color: 'blue', marginBottom: '.5%' }}>Username</Form.Label>
                <Form.Control value={username} type='text' placeholder='Username' style={{ color: 'white', backgroundColor: '#04060d', marginBottom: '1%', height: '3vh', width: '20%' }} onChange={e => setUsername(e.target.value)}/>
                <Form.Label style={{ color: 'blue', marginBottom: '.5%' }}>Password</Form.Label>
                <Form.Control value={password} type='password' placeholder='Password' style={{ color: 'white', backgroundColor: '#04060d', marginBottom: '1%', height: '3vh', width: '20%' }} onChange={e => setPassword(e.target.value)} />
                <ColorButton type='submit' variant='contained' onClick={(e) => handleLogin(e)}>Login</ColorButton>
            </Form>
        </div>
    );
}