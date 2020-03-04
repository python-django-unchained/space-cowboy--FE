import React, { useState } from 'react'
import { Redirect, Link} from 'react-router-dom'

// Planet pictures
import redGiant from '../images/red-giant.png'
import iceGiant from '../images/ice-giant.png'
import earth from '../images/earth-like.png'
import earth2 from '../images/earth-like2.png'
import brownExo from '../images/brown-exoplanet.png'
import sun from '../images/sun.png'
import gasGiant from '../images/gas-giant.png'

// Room Components
import IceGiantRoom from '../rooms/ice-giant-room'
import GasGiantRoom from '../rooms/gas-giant-room'
import RedGiantRoom from '../rooms/red-giant-room'
import EarthRoom from '../rooms/earth-room'
import Earth2Room from '../rooms/earth2-room'
import BrownExoRoom from '../rooms/brown-exo-room'
import SunRoom from '../rooms/sun-room'

export default function Map() {

    
    return (
        <div className='map'>
            <img onClick={() => <Link to='/red-giant-room' />} style={{cursor: 'pointer'}} className='red-giant' src={redGiant} alt='' />
            <img onClick={() => <Link to='/ice-giant-room' />} style={{cursor: 'pointer'}} className='ice-giant' src={iceGiant} alt=''/>
            <img style={{cursor: 'pointer'}} className='gas-giant' src={gasGiant} alt='' />
            <img style={{cursor: 'pointer'}} className='earth' src={earth} alt='' />
            <img style={{cursor: 'pointer'}} className='earth2' src={earth2} alt='' />
            <img style={{cursor: 'pointer'}} className='brown-exo' src={brownExo} alt='' />
            <img style={{cursor: 'pointer'}} className='sun' src={sun} alt='' />
        </div>
    )
}
