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
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
            I'm an incoming second year student at McGill University with a major in Computer Science and
            a minor in Economics. I have an interest in full-stack development and machine learning. Outside of school, 
            I enjoy playing video games with friends, reading, and listening to music. 
            
            Currently, I am learning how to use tensorflow to create basic artificial neural networks in order to strengthen my knowledge of deep learning.
            
        </div>
      </div>
    </section>
  )
}

export default About