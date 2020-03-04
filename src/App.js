import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar';
import LandingPage from './components/landing-page';
import Signup from './components/Signup';
import Map from './components/Map';
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
        <PrivateRoute exact path='/map' component={Map} />
        <Route path='/ice-giant-room' component={IceGiantRoom} />
        <Route path='/red-giant-room' component={RedGiantRoom} />
        <Route path='/gas-giant-room' component={GasGiantRoom} />
        <Route path='/earth-room' component={EarthRoom} />
        <Route path='/earth2-room' component={Earth2Room} />
        <Route path='/brown-exo-room' component={BrownExoRoom} />
        <Route path='/sun-room' component={SunRoom} />
      </header>
    </div>
  );
}

export default App;
