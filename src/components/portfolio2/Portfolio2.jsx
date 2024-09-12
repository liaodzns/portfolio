import React from 'react'
import './portfolio2.css'
import ME from '../../assets/me.jpg'

// import Swiper core and required modules
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
    {
        name: 'Caterpillar Game',
        review: 'Utilized knowledge of stacks, queues, and other data structures to create a mini caterpillar game from scratch without importing any classes  •  Used graphical interface knowledge to apply code and visualize the game on screen  •  Decoded and parsed strings that contained compressed information passed through a stack'
    },

    {
        name: 'RateMyProf Analyzer',
        review: 'Implemented and used my own hashmaps to analyze data generated from RateMyProfessor.com Reviews •  Wrote tools to help visualize the breakdown of word frequencies by numerical rating and gender in order to breakdown gender bias in teaching evaluations '
    },

    {
        name: 'Basic ANN',
        review: 'Created a geodemographic segmentation model based on 11 conditions to determine customers of a bank with a high risk of leaving  •  Used basic knowledge of artificial neural networks to train algorithm to make correct predictions '
    },

    {
        name: 'Mondrian Painting Game',
        review: 'Created a 2D game that models hierarchical data using trees by using recursive methods. Players apply operations such as rotations to a recursive structure in order to work towards a goal and earn points. '
    },
]

const Portfolio2 = () => {
  return (
    <section id='portfolio2'>
        <h2>Portfolio</h2>

        <Swiper className='container testimonials__container'
              // install Swiper modules
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              
              pagination={{ clickable: true }}
              
>
         {
            data.map(({ name,  review}, index) => {
                return (
                    <SwiperSlide key={index} className='testimonial'>
                    <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>
                        {review}
                    </small>
                </SwiperSlide>
                )
            } )
         }
    
        </Swiper>

    </section>
  )
}

export default Portfolio2