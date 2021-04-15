import React from 'react';
import downloadFunction from '../helpers/downloadFunction';

const About = () => {
  
  return (
    <section className='about'>
      <div className='aboutContainer'>
        <h2>ACERCA DE MI</h2>
        <div className='aboutGrid'>
          <div className='aboutText'>
            <p>
            Soy una persona apasionada por aprender, proactiva, curiosa e inquieta, me encantan los retos que ponen a prueba mis habilidades, siempre he pensado que no hay cosas o metas imposibles y que todo lo que me proponga lo puedo lograr.<br /><br />
            Soy profesional en Ingenieria Electrónica de la <span>Universidad Autonoma de Colombia</span> y Desarrolladora Frontend de <span>Laboratoria</span>, además actualmente soy estudiante de <span>Platzi</span>.<br /><br />
            Tengo experiencia en HTML, CSS, SCSS, Bootstrap, JavaScript, React.js, Node.js y Express.
            </p>
          </div>
          <div className='aboutDownloadCV'>
            <button onClick={downloadFunction}>
              Descargar CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
