import React from 'react';
import Card from './Card';
import cardsinfo from '../helpers/cardsInfo';

const Projects = () => {

  //console.log(cardsinfo.title)
  return (
    <section className="projects">
      <h2>MIS PROYECTOS</h2>
      <div className="projectsGrid">
        {cardsinfo.map(({title, image, text, tecnologies, video, titlevideo, linkdemo, linkrepo}) => 
          <Card
            title = {title}
            image = {image}
            text = {text}
            tecnologies = {tecnologies}
            video = {video}
            titleVideo = {titlevideo}
            linkDemo = {linkdemo}
            linkRepo = {linkrepo}
          />
        )}        
      </div>
    </section>
  )
}

export default Projects;
