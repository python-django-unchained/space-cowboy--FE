import React, { useRef, useEffect } from 'react'

const tilemap = require('./floortileset.png')

export default function Game(props) {


    const {map} = props

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
            wallX: 160,
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

    const drawImage = (ctx, img, planet=null) => {
        for (let c = 0; c < map.cols; c++) {
            for (let r = 0; r < map.rows; r++) {
                let tile = map.getTile(c, r);
                // Wall
                if (tile === 0) {
                    ctx.drawImage(
                    img, // image
                    // tileObj.hot.floor1X, // source x
                    // tileObj.hot.floor1Y, // source y
                    tileObj.hot.wallX,
                    tileObj.hot.wallY,
                    map.tsize, // source width
                    map.tsize, // source height
                    c * map.tsize, // target x
                    r * map.tsize, // target y
                    map.tsize, // target width
                    map.tsize // target height
                    );
                }
                // 1st floor texture - most common tile
                else if (tile === 1) {
                    ctx.drawImage(
                    img, // image
                    tileObj.hot.floor1X, // source x
                    tileObj.hot.floor1Y, // source y
                    map.tsize, // source width
                    map.tsize, // source height
                    c * map.tsize, // target x
                    r * map.tsize, // target y
                    map.tsize, // target width
                    map.tsize // target height
                    );
                }
                // 2nd floor texture - 2nd most common tile
                else if (tile === 2) {
                    ctx.drawImage(
                        img, // image
                        tileObj.hot.floor2X, // source x
                        tileObj.hot.floor2Y, // source y
                        map.tsize, // source width
                        map.tsize, // source height
                        c * map.tsize, // target x
                        r * map.tsize, // target y
                        map.tsize, // target width
                        map.tsize // target height
                        );
                }
                // 3rd floor texture - 3rd most common tile
                else if (tile === 3) {
                    ctx.drawImage(
                        img, // image
                        tileObj.hot.floor3X, // source x
                        tileObj.hot.floor3Y, // source y
                        map.tsize, // source width
                        map.tsize, // source height
                        c * map.tsize, // target x
                        r * map.tsize, // target y
                        map.tsize, // target width
                        map.tsize // target height
                        );
                }
                // if tile == 1,2,3,4 etc draw specific tiles
            }
        }
    }


    const canvasRef = useRef(null)
    const tilemapRef = useRef(null)
    const cowboyRef = useRef(null)
    const img = new Image()
    img.src = './floortileset.png'

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d')
        canvasRef.current.width = 880
        canvasRef.current.height = 880
        tilemapRef.current.onload = () => {
            drawImage(ctx, img)
        }
    }, [canvasRef.current])


    window.addEventListener('keydown', (event) => {
        console.log('event', event.keyCode)
        switch (event.keyCode) {
            case 37:
            case 65:
                cowboyRef.current.style.left = parseInt(cowboyRef.current.style.left) - 32 + 'px'
                break;
            case 38:
            case 87:
                cowboyRef.current.style.top = parseInt(cowboyRef.current.style.top) - 32 + 'px'
                break;
            case 39:
            case 68:
                cowboyRef.current.style.left = parseInt(cowboyRef.current.style.left) + 32 + 'px'
                break;
            case 40:
            case 83:
                cowboyRef.current.style.top = parseInt(cowboyRef.current.style.top) + 32 + 'px'
                break;
        }
    })

    return (
        <div style={{ position: 'relative', width: 1000 }}>
            <img ref={cowboyRef} src={require('../../images/sprite_00.png')} style={{ position: 'absolute', width: '32px', height: '32px', top: '64px', left: '64px' }}/>
            <canvas ref={canvasRef} />
            <img src={tilemap} ref={tilemapRef} style={{ display: 'none' }}/>
        </div>
    )
}
