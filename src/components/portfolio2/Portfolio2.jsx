import React from 'react'
import './portfolio2.css'

// import Swiper core and required modules
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
    {
        name: 'Chinese Vocabulary Learning Application',
        description: [
            '- Created a full-stack web application to help users learn Chinese vocabulary',
            '- Developed REST API endpoints to handle word generation and reset requests',
            '- Configured CORS in FastAPI to enable smooth communication between frontend and backend'
        ]
    },
    {
        name: 'Stock Prediction Model',
        description: [
            '- Developed a LSTM Neural Network using TensorFlow and Keras to predict the closing prices of stocks, leveraging historical stock data from yfinance API and incorporating technical indicators such as Moving Averages, MACD, and Bollinger Bands for feature enhancement',
            '- Developed and engineered time-series data for model training and created interactive visualizations using matplotlib to compare real vs predicted prices across multiple stocks'
        ]
    },
    {
        name: 'Spotify Clone',
        description: [
            '- Created a music streaming application using React and Tailwind, replicating the popular features and functionalities of Spotify',
            '- Integrated Stripe to enable premium subscriptions',
            '- Created database schemas and implemented authentication using Supabase, ensuring secure user registration and login processes'
        ]
    },
    {
        name: 'Financial ANN model',
        description: [
            '- Created a geodemographic segmentation model based on 11 conditions to determine customers of a bank with a high risk of leaving',
            '- Used basic knowledge of artificial neural networks to train algorithm to make correct predictions'
        ]
    },
    {
        name: 'RateMyProf Analyzer',
        description: [
            '- Implemented and used my own hashmaps to analyze data generated from RateMyProfessor.com Reviews',
            '- Wrote scripts to help visualize the breakdown of word frequencies by numerical rating and gender',
            '- Deciphered gender bias in teaching evaluations'
        ]
    },
]


const Portfolio2 = () => {
  return (
    <section id='portfolio2'>
        <h2>Portfolio</h2>

        <Swiper className='container projects__container'
              // install Swiper modules
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              
              pagination={{ clickable: true }}
              
>
         {
            data.map(({ name,  description}, index) => {
                return (
                    <SwiperSlide key={index} className='projects'>
                    <h5 className='project__title'>{name}</h5>
                    <ul className='project__desc'>
                        {description.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </SwiperSlide>
                )
            } )
         }
    
        </Swiper>

    </section>
  )
}

export default Portfolio2