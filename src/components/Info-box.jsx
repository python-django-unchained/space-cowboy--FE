import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

export default function InfoBox(props) {
    
   const {planet} = props




    console.log(planet)
            
 

    return (

        <div className='info-box'>
            <div className='buttons'>
                
                {/* <button onClick={CowboyRooms}>Test CowboyRooms</button> */}
            </div>

            <div className='info'>
                <h3 className='info-text'>ICY Planet</h3>
                <h4 className='info-text'>The Frozen Bluffs</h4>
                <h4 className='info-text'>You stand in a flat region dotted with various dark rocks.  You can see a bog in the distance.  The temperature is cool and the sky is clear.</h4>
            </div>

        </div>
    )
}