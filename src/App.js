import React from 'react';
import logo from './logo.svg';

// Components
import Navbar from './components/landing-page'

// Styles
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
    </div>
  );
}

export default App;
