import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  const [ currentPage, setCurrentPage ] = useState();

  const renderPage = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;