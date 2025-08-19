import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'

const About = () => {
  return (
    <section id = 'about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">   
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
            I'm a fourth year student at McGill University pursuing Computer Science with an Artificial Intelligence concentration and
            a minor in Economics. My interests primarily lie in back-end development, machine learning and data science! Outside of school, 
            I enjoy playing video games, listening to music, and watching tennis. I love trying new foods and hanging out with friends.
            
        </div>
      </div>
    </section>
  )
}

export default About