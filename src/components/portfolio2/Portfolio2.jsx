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
            '- Developed a LSTM Neural Network using TensorFlow and Keras to predict the closing prices of stocks, leveraging historical stock data from yfinance API and incorporating technical indicators for feature enhancement',
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
        name: 'Financial Institution Customer Attrition Model',
        description: [
            '- Designed and implemented an Artificial Neural Network (ANN) for predictive modeling on customer churn',
            '- Applied machine learning preprocessing workflows with libraries such as NumPy, Pandas, and Scikit-learn to streamline data transformation and analysis',
            '- Leveraged advanced TensorFlow techniques for model construction, optimization, and evaluation to achieve improved prediction accuracy',
            '- Analyzed model performance to refine feature engineering and hyperparameters, illustrating proficiency in data-driven decision-making'
        ]
    },
    {
        name: 'RateMyProf Analyzer',
        description: [
            '- Developed a HashMap object in Java from scratch to demonstrate knowledge of data structures and analyze data generated from RateMyProfessor.com reviews',
            '- Implemented scripts to help visualize the breakdown of word frequencies by numerical rating and gender and decipher gender bias in teaching evaluations',
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