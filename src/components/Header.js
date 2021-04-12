import React from 'react';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
//import '../styles/header.scss';

const Header = () => {
  return (
    <section className='headerContainer'>
      <div className='headerName'>
        <h1>STHEPHANY GRANADOS</h1>   
        <hr />             
        <p>Ingeniera Electrónica || Desarrolladora Frontend</p>
        <div className='headerSocial'>
          <a href='https://github.com/Sthephany04' target='_blank' rel="noreferrer" ><img src={github} alt='Icono github'></img></a>
          <a href='https://www.linkedin.com/in/sthephany-granados/' target='_blank' rel="noreferrer" ><img src={linkedin} alt='Icono linkedin'></img></a>
          <a href='https://twitter.com/Sthepha04' target='_blank' rel="noreferrer" ><img src={twitter} alt='Icono twitter'></img></a>
        </div>
      </div>
      <div className='headerPhoto'>        
      </div>
    </section>
  )
}

export default Header;
