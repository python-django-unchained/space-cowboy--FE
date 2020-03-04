import React, { useState } from 'react'
import { Image } from 'canvas'

// Planet pictures
import redGiant from '../images/red-giant.png'
import iceGiant from '../images/ice-giant.png'
import earth from '../images/earth-like.png'
import earth2 from '../images/earth-like2.png'
import brownExo from '../images/brown-exoplanet.png'
import sun from '../images/sun.png'
import gasGiant from '../images/gas-giant.png'

export default function Map() {

    const [user, setUser] = useState({
        name: '',
        room: '',
        x:0,
        y:0,
    });
    

    return (
        <div className='map'>
            <img className='red-giant' src={redGiant} />
            <img className='ice-giant' src={iceGiant} />
            <img className='gas-giant' src={gasGiant} />
            <img className='earth' src={earth} />
            <img className='earth2' src={earth2} />
            <img className='brown-exo' src={brownExo} />
            <img className='sun' src={sun} />
        </div>
    )
}
