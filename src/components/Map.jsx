import React from 'react'


// Planet pictures
import redGiant from '../images/red-giant.png'
import iceGiant from '../images/ice-giant.png'
import earth from '../images/earth-like.png'
import earth2 from '../images/earth-like2.png'
import brownExo from '../images/brown-exoplanet.png'
import sun from '../images/sun.png'
import gasGiant from '../images/gas-giant.png'


export default function Map(props) {

    
    return (
        <div className='map'>
            <h3 className='map-title'> Select a World to Explore</h3>
            <img onClick={() => props.history.push('/Ragnarok')} style={{cursor: 'pointer'}} className='red-giant' src={redGiant} alt='Red Giant' />
            <img onClick={() => props.history.push('/Mordor')} style={{cursor: 'pointer'}} className='ice-giant' src={iceGiant} alt='Ice Giant'/>
            <img onClick={() => props.history.push('/Titan')} style={{cursor: 'pointer'}} className='gas-giant' src={gasGiant} alt='Gas Giant' />
            <img onClick={() => props.history.push('/Terra')} style={{cursor: 'pointer'}} className='earth' src={earth} alt='Earth' />
            <img onClick={() => props.history.push('/Azeroth')} style={{cursor: 'pointer'}} className='earth2' src={earth2} alt='Earth 2' />
            <img onClick={() => props.history.push('/Europa')} style={{cursor: 'pointer'}} className='brown-exo' src={brownExo} alt='Brown Exo' />
            <img onClick={() => props.history.push('/Sol')} style={{cursor: 'pointer'}} className='sun' src={sun} alt='Sun' />
        </div>
    )
}

// id of room
// planet: name 
// function that finds first non wall square
// send id of room and planet name in axios call
// space doesnt need room id, need planet name: Space
// api/adv/changeplanet