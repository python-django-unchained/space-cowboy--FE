import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'
import InfoBox from '../components/Info-box'
import Game from '../components/Game/Game'

export default function GasGiantRoom() {

    const [player, setPlayer] = useState({
        uuid: '',
        name: '',
        title: '',
        description: '',
        players: []
    })
    const [planet, setPlanet] = useState()
    const [currentRoom, setCurrentRoom] = useState({title: '', description: '', planet: ''})

    const [map, setMap] = useState({
        cols: 27,
        rows: 27,
        tsize: 32,
        tiles: [],
        getTile: function(col, row) {
            return this.tiles[row * map.cols + col]
        }
    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/adv/rooms?planet=Mordor`)
            .then(res => {                
                setPlanet(res.data)
                setCurrentRoom(res.data[0])         
            })
            .catch(err => console.log(err.response))
    }, [])
    

    useEffect(() => {
        axiosWithAuth().get('/api/adv/rooms?planet=Mordor')
        .then(res => {
                let newTiles = res.data.map(obj => {
                    return obj.tile_num
                })
                setMap({
                    ...map,
                    tiles: newTiles
                })
                setLoading(false)
            })
        .catch(err => console.log(err))
        }, [])

        
    return (
        <div className='room-background gas-giant'>
            <div className='game-container'>
                {loading === true ? (<h1>Loading...</h1>) : (<Game map={map} />)}
            </div>
            <div className='info-container'>
                <InfoBox planet={planet} currentRoom={currentRoom}/>
            </div>
            
        </div>
    )
}