import React from 'react';

const Card = ({title, image, text, tecnologies, video, titleVideo, linkDemo, linkRepo}) => {
  return (
    <div className='card'>
      <img src={image} alt='foto' />
      <div className='cardGroup'>
        <h3>{title}</h3>
        <p className='cardText'>{text}</p>
        <p className='cardTecnologies'>{tecnologies}</p>
        {
          video !== '' && <><a className='linkVideo' href={video} target='_blank' rel='noreferrer' >{titleVideo}</a><br /></>
        }
        <div>
          {
            linkRepo !== '' && <button><a className='cardLink' href={linkRepo} target='_blank' rel='noreferrer'>Repositorio</a></button>
          } 
          {
            linkDemo !== '' && <button><a className='cardLink' href={linkDemo} target='_blank' rel='noreferrer'>Demo</a></button>
          }
        </div>
      </div>
    </div>
  )
}

export default Card;
