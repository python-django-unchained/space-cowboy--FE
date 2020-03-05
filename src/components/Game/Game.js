import React, { useRef, useEffect } from 'react'
var _ = require('underscore');

const tilemap = require('./floortileset.png')

const tileObj = {
    hot: {
        floor1X: 128,
        floor1Y: 128,
        floor2X: 32,
        floor2Y: 128,
        floor3X: 159,
        floor3Y: 128,
        wallX: 64,
        wallY: 128
    },
    cold: {
        floor1X: 128,
        floor1Y: 160,
        floor2X: 160,
        floor2Y: 160,
        floor3X: 96,
        floor3Y: 160,
        wallX: 196,
        wallY: 160
    },
    normal: {
        floor1X: 64,
        floor1Y: 224,
        floor2X: 96,
        floor2Y: 224,
        floor3X: 128,
        floor3Y: 224,
        wallX: 0,
        wallY: 160,
    },
    yellow: {
        floor1X: 32,
        floor1Y: 96,
        floor2X: 64,
        floor2Y: 96,
        floor3X: 96,
        floor3Y: 96,
        wallX: 0,
        wallY: 96,
    },
    brown: {
        floor1X: 0,
        floor1Y: 192,
        floor2X: 32,
        floor2Y: 192,
        floor3X: 64,
        floor3Y: 192,
        wallX: 32,
        wallY: 0,
    }
}


export default function Game(props) {
    const canvasRef = useRef(null)
    const tilemapRef = useRef(null)
    const cowboyRef = useRef(null)
    
    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d')
        canvasRef.current.width = 900
        canvasRef.current.height = 900
        tilemapRef.current.onload = () => {
            drawImage(ctx, props.img)
        }
    }, [])
    
    const drawImage = (ctx, img, planet=null) => {
        for (let c = 0; c < props.map.cols; c++) {
            for (let r = 0; r < props.map.rows; r++) {
                let tile = props.map.getTile(c, r);
                // Wall
                if (tile == 0) {
                    ctx.drawImage(
                    img, // image
                    tileObj.hot.wallX,
                    tileObj.hot.wallY,
                    props.map.tsize, // source width
                    props.map.tsize, // source height
                    c * props.map.tsize, // target x
                    r * props.map.tsize, // target y
                    props.map.tsize, // target width
                    props.map.tsize // target height
                    );
                }
                // 1st floor texture - most common tile
                else if (tile == 1) {
                    ctx.drawImage(
                    img, // image
                    tileObj.hot.floor1X, // source x
                    tileObj.hot.floor1Y, // source y
                    props.map.tsize, // source width
                    props.map.tsize, // source height
                    c * props.map.tsize, // target x
                    r * props.map.tsize, // target y
                    props.map.tsize, // target width
                    props.map.tsize // target height
                    );
                }
                // 2nd floor texture - 2nd most common tile
                else if (tile == 2) {
                    ctx.drawImage(
                        img, // image
                        tileObj.hot.floor2X, // source x
                        tileObj.hot.floor2Y, // source y
                        props.map.tsize, // source width
                        props.map.tsize, // source height
                        c * props.map.tsize, // target x
                        r * props.map.tsize, // target y
                        props.map.tsize, // target width
                        props.map.tsize // target height
                        );
                }
                // 3rd floor texture - 3rd most common tile
                else if (tile == 3) {
                    ctx.drawImage(
                        img, // image
                        tileObj.hot.floor3X, // source x
                        tileObj.hot.floor3Y, // source y
                        props.map.tsize, // source width
                        props.map.tsize, // source height
                        c * props.map.tsize, // target x
                        r * props.map.tsize, // target y
                        props.map.tsize, // target width
                        props.map.tsize // target height
                        );
                }
            }
        }
    }
    const bounds = (props.map.cols * 32) - 32
    window.addEventListener('keydown', (event) => {
        let current_room = _.find(props.map.tiles, (item) => item.x === parseInt(cowboyRef.current.style.left) && item.y == parseInt(cowboyRef.current.style.top))
        switch (event.keyCode) {
                case 37:
                case 65:
                    if(parseInt(cowboyRef.current.style.left) <= bounds && parseInt(cowboyRef.current.style.left) >= 64) {
                        if (current_room.w_to !== 0) {
                            cowboyRef.current.style.left = parseInt(cowboyRef.current.style.left) - 32 + 'px'
                            console.log(_.find(props.map.tiles, (item) => item.x === parseInt(cowboyRef.current.style.left) && item.y == parseInt(cowboyRef.current.style.top)))
                            console.log(`X: ${parseInt(cowboyRef.current.style.left)}, Y: ${parseInt(cowboyRef.current.style.top)}`)
                            break;
                        } else { break }
                    } else { break }
                case 38:
                case 87:
                    if(parseInt(cowboyRef.current.style.top) <= bounds && parseInt(cowboyRef.current.style.top) >= 64) {
                        if (current_room.n_to !== 0) {
                            cowboyRef.current.style.top = parseInt(cowboyRef.current.style.top) - 32 + 'px'
                            console.log(_.find(props.map.tiles, (item) => item.x === parseInt(cowboyRef.current.style.left) && item.y == parseInt(cowboyRef.current.style.top)))
                            console.log(`X: ${parseInt(cowboyRef.current.style.left)}, Y: ${parseInt(cowboyRef.current.style.top)}`)
                            break;
                        } else { break }
                    } else { break }
                case 39:
                case 68:
                    if(parseInt(cowboyRef.current.style.left) <= bounds - 64 && parseInt(cowboyRef.current.style.left) >= 32) {
                        if(current_room.e_to !== 0) {
                            cowboyRef.current.style.left = parseInt(cowboyRef.current.style.left) + 32 + 'px'
                            console.log(_.find(props.map.tiles, (item) => item.x === parseInt(cowboyRef.current.style.left) && item.y == parseInt(cowboyRef.current.style.top)))
                            console.log(`X: ${parseInt(cowboyRef.current.style.left)}, Y: ${parseInt(cowboyRef.current.style.top)}`)
                            break;
                        } else { break }
                    } else { break }
                case 40:
                case 83:
                    if(parseInt(cowboyRef.current.style.top) <= bounds - 64 && parseInt(cowboyRef.current.style.top) >= 32) {
                        if(current_room.s_to !== 0) {
                            cowboyRef.current.style.top = parseInt(cowboyRef.current.style.top) + 32 + 'px'
                            console.log(_.find(props.map.tiles, (item) => item.x === parseInt(cowboyRef.current.style.left) && item.y == parseInt(cowboyRef.current.style.top)))
                            console.log(`X: ${parseInt(cowboyRef.current.style.left)}, Y: ${parseInt(cowboyRef.current.style.top)}`)
                            break;
                        } else { break }
                    } else { break }
                default:
                    break;
            }
    })

    return (
        <div style={{ position: 'relative', width: 1000, height: '75vh' }}>
            <img alt='character' ref={cowboyRef} src={require('../../images/sprite_00.png')} style={{ position: 'absolute', width: '32px', height: '32px', top: '96px', left: '128px' }}/>
            <canvas ref={canvasRef} />
            <img src={tilemap} ref={tilemapRef} style={{ display: 'none' }}/>
        </div>
    )
}
