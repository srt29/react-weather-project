import React from 'react';
import Weather from './Weather';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
     <Weather defaultCity="Durban"/>
     <footer className='footer'>
      This project was coded by <a href='https://www.github.com/srt29' target='_blank' rel='noopener noreferrer'>Sian Thumbadoo</a> and is <a href='https://github.com/srt29/react-weather-project' target='_blank' rel='noopener no referrer'>open-sourced on Github</a>
     </footer>
    </div>
    </div>
  );
}


 