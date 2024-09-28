import React from 'react'
import './portfolio.css'
import ME from '../../assets/me.jpg'

const data = [
  {
    id: 1,
    image: ME,
    title: 'Stock Prediction Model',
    github: 'https://github.com/liaodzns/stock-prediction-model',
  },
  
  {
    id: 1,
    image: ME,
    title: 'Learn Hanyu',
    github: 'https://github.com/liaodzns/hanyu_daily',
  },

  {
    id: 2,
    image: ME,
    title: 'RateMyProf Analyzer',
    github: 'https://github.com/liaodzns/rmf_analyzer',
  },

  {
    id: 3,
    image: ME,
    title: 'Spotify Clone',
    github: 'https://github.com/liaodzns/spotify-clone',
  },

]

const Portfolio = () => {
  return (
    <section id = 'portfolio'>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              {/* <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div> */}
    
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio