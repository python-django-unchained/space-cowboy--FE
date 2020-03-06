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
  return (
    <div className="App">
      <header className="App-header">
        <Route path='/' component={ Navbar } />
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/signup' component={ Signup } />
        <Route exact path='/game' component={GameState} />
        <PrivateRoute exact path='/map' component={Map} />
        <Route path='/Mordor' component={IceGiantRoom} />
        <Route path='/Ragnarok' component={RedGiantRoom} />
        <Route path='/Titan' component={GasGiantRoom} />
        <Route path='/Terra' component={EarthRoom} />
        <Route path='/Azeroth' component={Earth2Room} />
        <Route path='/Europa' component={BrownExoRoom} />
        <Route path='/Sol' component={SunRoom} />
      </header>
    </div>
  );
}

export default App;
