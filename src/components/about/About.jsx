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
            I'm a third year student at McGill University with a major in Computer Science and
            a minor in Economics. I have interests primarily in back-end development, machine learning and quantitative finance! Outside of school, 
            I enjoy playing video games with friends, reading, and listening to music. 
            
        </div>
      </div>
    </section>
  )
}

export default About