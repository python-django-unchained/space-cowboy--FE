import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar';
import LandingPage from './components/landing-page';
import Signup from './components/Signup';
import Map from './components/Map';
import GameState from './components/Game/GameState'
import PrivateRoute from './components/PrivateRoute'
// Rooms
import IceGiantRoom from './rooms/ice-giant-room'
import GasGiantRoom from './rooms/gas-giant-room'
import RedGiantRoom from './rooms/red-giant-room'
import EarthRoom from './rooms/earth-room'
import Earth2Room from './rooms/earth2-room'
import BrownExoRoom from './rooms/brown-exo-room'
import SunRoom from './rooms/sun-room'

// Styles
import './styles/App.scss';





function App() {

  const currentRoom = (arr) => {
    let room;
    for (let i = 0; i<arr.length; i++){
        if (arr[i].tile_num !== 0) {
             room = arr[i]
            break
        }
    }
    return room
  }

  return (
    <div className="App">
      <header className="App-header">
        <Route path='/' component={ Navbar } />
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/signup' component={ Signup } />
        <Route exact path='/game' component={GameState} />
        <PrivateRoute exact path='/map' component={Map} />
        <Route path='/ice-giant-room' render={(props) => < IceGiantRoom {...props} currentRoom={currentRoom}  />} />
        <Route path='/red-giant-room' render={(props) => < RedGiantRoom {...props} currentRoom={currentRoom} />} />
        <Route path='/gas-giant-room' render={(props) => < GasGiantRoom {...props} currentRoom={currentRoom} />} />
        <Route path='/earth-room' render={(props) => < EarthRoom {...props} currentRoom={currentRoom} />}  />
  <Route path='/earth2-room' render={(props) => < Earth2Room {...props} currentRoom={currentRoom}  />}/>
        <Route path='/brown-exo-room' render={(props) => < BrownExoRoom {...props} currentRoom={currentRoom} />} />
  <Route path='/sun-room' render={(props) => < SunRoom {...props} currentRoom={currentRoom}/> }/>
      </header>
    </div>
  );
}

export default App;
