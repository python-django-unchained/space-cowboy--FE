import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

export default function InfoBox(props) {
    
   const {planet, currentRoom, planetName} = props

   const changePlanet = () => {
       axiosWithAuth()
            .post('/api/adv/changeplanet', {planet: 'Space', roomId: 1})
            .then(res => console.log(res))
            .catch(err => console.log(err.response))
   }
 

    return (

        <div className='info-box'>
            <div className='buttons'>                
                <button className='return-button' onClick={() => {props.props.history.push('/map'); changePlanet()}}>
                    Return to Map
                </button>
            </div>

            <div className='info'>
                <h3 className='info-text'>{props.planetName.substr(1, props.planetName.length)}</h3>
                <h4 className='info-text'>{props.currentRoom.title}</h4>
                <h4 className='info-text description'>{props.currentRoom.description}</h4>
            </div>

        </div>
    )
}