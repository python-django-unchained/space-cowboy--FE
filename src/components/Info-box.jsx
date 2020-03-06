import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

export default function InfoBox(props) {
    
   const {planet, currentRoom, planetName} = props




    console.log(planet)
    console.log(currentRoom)
    console.log(props)
            
 

    return (

        <div className='info-box'>
            <div className='buttons'>                
                <button className='return-button' onClick={() => props.props.history.push('/map')}>
                    Return to Map
                </button>
            </div>

            <div className='info'>
                <h3 className='info-text'>{planetName}</h3>
                <h4 className='info-text'>{currentRoom.title}</h4>
                <h4 className='info-text description'>{currentRoom.description}</h4>
            </div>

        </div>
    )
}