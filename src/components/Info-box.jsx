import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

export default function InfoBox(props) {
    
   const {planet, currentRoom} = props




    console.log(planet)
    console.log(currentRoom)
            
 

    return (

        <div className='info-box'>
            <div className='buttons'>
                
                {/* <button onClick={CowboyRooms}>Test CowboyRooms</button> */}
            </div>

            <div className='info'>
                <h3 className='info-text'>MORDOR</h3>
                <h4 className='info-text'>{currentRoom.title}</h4>
                <h4 className='info-text description'>{currentRoom.description}</h4>
            </div>

        </div>
    )
}