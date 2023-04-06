import React from 'react'
import Navigation from '../src/component/navigation/Navigation';
import Display from './component/display/Display';
import Lightbox from './Lightbox';




function App() {
  return (
    <div className="App">
      <Navigation />
      <Lightbox />
      <Display />
     
    </div>
  );
}

export default App;
