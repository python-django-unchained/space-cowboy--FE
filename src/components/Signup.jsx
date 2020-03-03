import React, { useState } from 'react'
import { withStyles } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { Form } from 'react-bootstrap';
import axios from 'axios';

export default function Signup() {
    const [username, setUsername] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')

    const authOptions = {
        method: 'POST',
        url: 'https://space-cowboyz.herokuapp.com/api/register/',
        data: {username: username, password1: password1, password2: password2},
        headers: {
            "Content-Type": "application/json",
        }
    }

    const handleLogin = e => {
        e.preventDefault()
        axios(authOptions)
        .then(res => {
            console.log(res)
            // localStorage.setItem("token", res.data.token)
        })
        .catch(err => console.error(err))
    }

    const ColorButton = withStyles(theme => ({
        root: {
            backgroundColor: 'blue',
        },
    }))(Button);

    return (
        <div className='landing-page'>
            <h1 className='title-box'>
                SPACE COWBOY
            </h1>
            <Form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ color: 'white' }}>Register</h1>
                <Form.Label style={{ color: 'blue', marginBottom: '.5%' }}>Username</Form.Label>
                <Form.Control value={username} type='text' placeholder='Username' style={{ color: 'white', backgroundColor: '#04060d', marginBottom: '1%', height: '3vh', width: '20%' }} onChange={e => setUsername(e.target.value)}/>
                <Form.Label style={{ color: 'blue', marginBottom: '.5%' }}>Password</Form.Label>
                <Form.Control value={password1} type='password' placeholder='Password' style={{ color: 'white', backgroundColor: '#04060d', marginBottom: '1%', height: '3vh', width: '20%' }} onChange={e => setPassword1(e.target.value)} />
                <Form.Label style={{ color: 'blue', marginBottom: '.5%' }}>Confirm Password</Form.Label>
                <Form.Control value={password2} type='password' placeholder='Password' style={{ color: 'white', backgroundColor: '#04060d', marginBottom: '1%', height: '3vh', width: '20%' }} onChange={e => setPassword2(e.target.value)} />
                <ColorButton type='submit' onClick={handleLogin} variant='contained' >Register</ColorButton>
            </Form>
        </div>
    )
}
