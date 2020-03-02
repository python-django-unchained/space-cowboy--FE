import React from 'react';
import {Route} from 'react-router-dom'

// Components
import Navbar from './components/navbar'
import LandingPage from './components/landing-page'

// Styles
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Route path='/home' component ={LandingPage} />
      </header>
    </div>
  );
}

export default App;
