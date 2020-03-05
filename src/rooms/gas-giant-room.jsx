import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'
import InfoBox from '../components/Info-box'

export default function GasGiantRoom() {

    const [player, setPlayer] = useState({
        uuid: '',
        name: '',
        title: '',
        description: '',
        players: []
    })
    const [planet, setPlanet] = useState()

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/adv/rooms?planet=Earth`)
            .then(res => {                
                setPlanet(res.data)         
            })
            .catch(err => console.log(err.response))
    }, [])

    // Testing server init call
    const init = () => {
        axios
        .get('https://lambda-mud-test.herokuapp.com/api/adv/init/',
            {
            headers: { Authorization: `Token ${localStorage.getItem("key")}`,
                    "Content-Type": "application/json" }
                })
        .then(res =>{
            console.log("get init res",res)
            setPlayer(res.data)
            console.log(player)
        })
        .catch(err => console.log(err.response))

    }
    
      

    // Testing server registration
    const register = () => {

        axios
        .post('https://lambda-mud-test.herokuapp.com/api/registration/',{
            username:'cowboytest1',
            password1:'test2020',
            password2:'test2020',            
        },
        {headers: {
            "content-type": "application/json"    
        }}
        )
        .then(res =>{
        localStorage.setItem('key', res.data.key)
        })
        .catch(err => console.log(err.response))
    }              
    

    // Testing Server Login
    const login = () => {

        const key = localStorage.getItem('key')
        
        axios
        .post('https://lambda-mud-test.herokuapp.com/api/login/',{
            username:'cowboytest1',
            password:'test2020'            
            },
            {
                headers: {
                    "Authorization": `Token, ${key}`,
                    "content-type": "application/json"    
                }}
            )
        .then(res =>{
            localStorage.setItem('key', res.data.key)
            console.log('LOGGED IN', key)
        })
        .catch(err => console.log(err.response))   
          
    }

    // Cowboy Server Init
    const CowboyInit = () => {        
            axiosWithAuth()
                .get('/api/adv/init/')
                .then(res => {
                    console.log(res)
                    setPlayer(res.data)
                    console.log(player)
                })
                .catch(err => console.log(err.response))         
            }

    return (
        <div className='room-background gas-giant'>
            {/* <div className='button-container'>
                <button onClick={register}>Test Register</button>
                <button onClick={login}>Test Login</button>
                <button onClick={init}>Test Init</button>
                <button onClick={CowboyInit}>Test CowboyInit</button>
            </div> */}
            
            <div className='info-container'>
                <InfoBox planet={planet} />
            </div>
            
        </div>
    )
}