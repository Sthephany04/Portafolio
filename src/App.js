import React from 'react';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';
import SkillsTech from './components/SkillsTech';
import Footer from './components/Footer';

import "./styles/index.scss";


const App = () => {
  return (
    <div className='pageContainer'>
      <Header />
      <About />
      <Projects />
      <SkillsTech />
      <Footer />
    </div>
  );
}

export default App;
