import React from 'react'
import './portfolio.css'
import ME from '../../assets/me.jpg'
import PROF from '../../assets/ratemyprof.png'
import CAT from '../../assets/caterpillar.png'
import ANN from '../../assets/ann.png'
import BLOB from '../../assets/blobgame.png'

const data = [
  {
    id: 1,
    image: CAT,
    title: 'Caterpillar Game',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id: 2,
    image: PROF,
    title: 'RateMyProf Analyzer',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id: 3,
    image: ANN,
    title: 'Basic ANN',
    github: 'https://github.com',
    demo: 'https://github.com'
  },

  {
    id: 4,
    image: BLOB,
    title: 'Mondrian Painting Game',
    github: 'https://github.com',
    demo: 'https://github.com'
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
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
    
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  {/* <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
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