import React from 'react';
import './App.css';
import ProfileImg from './img/profile_img_1024x1024.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ProfileImg} className="ProfileImg" alt="image" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
