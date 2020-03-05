import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Navbar from './components/navbar';
import LandingPage from './components/landing-page';
import Signup from './components/Signup';
import Map from './components/Map';
import Game from './components/Game/Game'
// Styles
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path='/' component={ Navbar } />
        <Route exact path='/' component={ LandingPage } />
        <Route exact path='/signup' component={ Signup } />
        <Route exact path='/map' component={Map} />
        <Route exact path='/game' component={Game} />
      </header>
    </div>
  );
}

export default App;
