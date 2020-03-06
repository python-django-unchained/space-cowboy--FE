import React, { useState, useEffect } from 'react'
import Game from './Game'

import axiosWithAuth from '../../utils/axiosWithAuth'



export default function GameState() {
    const [loading, setLoading] = useState(true)
    const [map, setMap] = useState({
        cols: 27,
        rows: 27,
        tsize: 32,
        tiles: [],
        getTile: function(col, row) {
            return this.tiles[row * map.cols + col].tile_num
        }
    })

    const img = new Image()
    img.src = './floortileset.png'
    
    useEffect(() => {
        axiosWithAuth().get('/api/adv/rooms?planet=Titan')
        .then(res => {
            // const newData = res.data.map(item => item)
            setMap({
                ...map,
                tiles: res.data
            })
            setLoading(false)
        })
        .catch(err => console.log(err))
        console.log('map', map)
        }, [])

    return (
        <>
            {/* <h1 style={{color:'white'}}>{`${map.tiles.length}`}</h1> */}
            {loading === true ? (<h1>Loading...</h1>) : (<Game map={map} img={img}/>)}
        </>
    )
}
