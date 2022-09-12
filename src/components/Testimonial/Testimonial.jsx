import React from 'react'
import './Testimonial.css'
import user1 from '../../assests/user1.jpg'
import user2 from '../../assests/user2.jpg'
import user3 from '../../assests/user3.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const data = [
  {
    user: user1,
    name: 'Nikunj vadher1',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis facilis voluptatum consectetur molestiae nihil voluptas sit aut itaque hic.'
  },
  {
    user: user2,
    name: 'Nikunj vadher2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis facilis voluptatum consectetur molestiae nihil voluptas sit aut itaque hic.'
  },
  {
    user: user3,
    name: 'Nikunj vadher3',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta debitis facilis voluptatum consectetur molestiae nihil voluptas sit aut itaque hic.'
  },
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      
      <h5>Review From Clients</h5>
      <h2>Testimonial</h2>

      <Swiper className=" container testimonial__container"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
       >
        {
          data.map(({user , name , review}, index)=> {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="clien__img">
                  <img src={user} alt="Client img" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review text-light'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonial;