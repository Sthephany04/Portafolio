import React from 'react';
import skillsTech from '../helpers/skillsTech';


const SkillsTech = () => {
  return (
    <section className='skills'>
      <div className='skillsContainer'>
        <h2>SKILLS</h2>
        {
          skillsTech.map(({image, name}) => (
            <img className='sizeLogo' src={image} alt={name} />
          ))
        }
      </div>
    </section>
  )
}

export default SkillsTech;
