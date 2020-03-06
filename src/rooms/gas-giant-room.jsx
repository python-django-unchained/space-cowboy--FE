import React, { useEffect, useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'
import InfoBox from '../components/Info-box'
import Game from '../components/Game/Game'

export default function GasGiantRoom(props) {
    const planetName = props.history.location.pathname
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
            return this.tiles[row * map.cols + col].tile_num
        }
    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/adv/rooms?planet=Titan`)
            .then(res => {
                setMap({
                    ...map,
                    tiles: res.data
                })
                setCurrentRoom(res.data[76])   
                setLoading(false)      
            })
            .catch(err => console.log(err.response))
    }, [])
    

    // useEffect(() => {
    //     axiosWithAuth().get('/api/adv/rooms?planet=Mordor')
    //     .then(res => {
    //             let newTiles = res.data                
    //             setMap({
    //                 ...map,
    //                 tiles: newTiles
    //             })
    //             setLoading(false)
    //         })
    //     .catch(err => console.log(err))
    //     }, [])

        
    return (
        <div className='room-background gas-giant'>
            <div className='game-container'>
                {loading === true ? (<h1>Loading...</h1>) : (<Game planetName={props.history.location.pathname} map={map} currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />)}
            </div>
            <div className='info-container'>
                <InfoBox planetName={props.history.location.pathname} planet={planet} currentRoom={currentRoom} props ={props}/>
            </div>
            
        </div>
    )
}