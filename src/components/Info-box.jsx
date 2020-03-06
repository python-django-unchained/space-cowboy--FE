import React from 'react'

export default function InfoBox(props) {
    return (

        <div className='info-box'>
            <div className='buttons'>                
                <button className='return-button' onClick={() => props.props.history.push('/map')}>
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