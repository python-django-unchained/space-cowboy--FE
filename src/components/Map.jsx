import React, { useState } from 'react'
import { Image } from 'canvas'

export default function Map() {

    const [user, setUser] = useState({
        name: '',
        room: '',
        x:0,
        y:0,
    });
    

    return (
        <div className='map'>
            
        </div>
    )
}
