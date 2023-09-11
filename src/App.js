import React from 'react';
import './App.css';
import ProfileImg from './img/profile_img_1024x1024.jpg';

function App() {
  return (
    <div className="App">
      <header>
      
      </header>

      <body>
        <div className='Container'>
          <img src={ProfileImg} className="ProfileImg" alt="josephImg" />
          <p>This is Joseph Hsueh.</p>
        </div>
      </body>
    </div>
  );
}

export default App;
