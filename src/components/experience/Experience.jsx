import React from 'react'
import './experience.css'
import {RiArrowDropRightLine} from 'react-icons/ri'

const Experience = () => {
  return (
    <section id = 'experience'>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
            <h3>Languages</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <RiArrowDropRightLine className='experience__details-icon' />
                <div>
                  <h4>Python</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>

              <article className='experience__details'>
                <RiArrowDropRightLine className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>

              <article className='experience__details'>
                <RiArrowDropRightLine className='experience__details-icon'/>
                <div>
                <h4>HTML/CSS</h4>
                {/* <small className='text-light'>Basic</small> */}
                </div>
              </article>

              <article className='experience__details'>
                <RiArrowDropRightLine className='experience__details-icon'/>
                <div>
                <h4>JavaScript</h4>
                {/* <small className='text-light'>Basic</small> */}
                </div>
              </article>

              <article className='experience__details'>
                <RiArrowDropRightLine className='experience__details-icon'/>
                <div>
                <h4>Scripting</h4>
                {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>

              <article className='experience__details'>
                <RiArrowDropRightLine className='experience__details-icon'/>
                <div>
                <h4>R</h4>
                {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>

              <article className='experience__details'>
                <RiArrowDropRightLine className='experience__details-icon'/>
                <div>
                <h4>C</h4>
                {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
            </div>
        </div>
        
        {/* END OF FRONTEND  */}
        <div className='experience__backend'>
          <h3>Tools and Framework</h3>
              <div className='experience__content'>
                <article className='experience__details'>
                  <RiArrowDropRightLine className='experience__details-icon'/>
                  <div>
                  <h4>React.js</h4>
                  {/* <small className='text-light'>Basic</small> */}
                  </div>
                </article>

                <article className='experience__details'>
                  <RiArrowDropRightLine className='experience__details-icon'/>
                  <div>
                  <h4>Node.js</h4>
                  {/* <small className='text-light'>Basic</small> */}
                  </div>
                </article>

                <article className='experience__details'>
                  <RiArrowDropRightLine className='experience__details-icon'/>
                  <div>
                  <h4>Jenkins CI/CD</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                  </div>
                </article>

                <article className='experience__details'>
                  <RiArrowDropRightLine className='experience__details-icon'/>
                  <div>
                  <h4>PyQT</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                  </div>
                </article>

                <article className='experience__details'>
                  <RiArrowDropRightLine className='experience__details-icon'/>
                  <div>
                  <h4>Django</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                  </div>
                </article>

                <article className='experience__details'>
                  <RiArrowDropRightLine className='experience__details-icon'/>
                  <div>
                  <h4>AWS Lightsail</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                  </div>
                </article>

                <article className='experience__details'>
                  <RiArrowDropRightLine className='experience__details-icon'/>
                  <div>
                  <h4>Artifactory</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                  </div>
                </article>
              </div>
          </div>
      </div>

    </section>
  )
}

export default Experience