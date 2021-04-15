import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';

import "./styles/index.scss";


const App = () => {
  return (
    <div className='pageContainer'>
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
