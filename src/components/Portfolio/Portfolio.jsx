import React from 'react'
import img1 from '../../assests/img1.jpg'
import img2 from '../../assests/img2.jpg'
import img3 from '../../assests/img3.jpg'
import img4 from '../../assests/img4.jpg'
import img5 from '../../assests/img5.jpg'
import img6 from '../../assests/img6.jpg'

import './Portfolio.css'

const data=[
  {
    id: 1,
    image: img1,
    title: 'Lorem ipsum',
    github: 'https://github.com/Nikunjvadher/iNotebook---React',
    demo: 'https://github.com/Nikunjvadher/iNotebook---React'
  },
  {
    id: 2,
    image: img2,
    title: 'Lorem ipsum',
    github: 'https://github.com/Nikunjvadher/iNotebook---React',
    demo: 'https://github.com/Nikunjvadher/iNotebook---React'
  },
  {
    id: 3,
    image: img3,
    title: 'Lorem ipsum',
    github: 'https://github.com/Nikunjvadher/iNotebook---React',
    demo: 'https://github.com/Nikunjvadher/iNotebook---React'
  },
  {
    id: 4,
    image: img4,
    title: 'Lorem ipsum',
    github: 'https://github.com/Nikunjvadher/iNotebook---React',
    demo: 'https://github.com/Nikunjvadher/iNotebook---React'
  },
  {
    id: 5,
    image: img5,
    title: 'Lorem ipsum',
    github: 'https://github.com/Nikunjvadher/iNotebook---React',
    demo: 'https://github.com/Nikunjvadher/iNotebook---React'
  },
  {
    id: 6,
    image: img6,
    title: 'Lorem ipsum',
    github: 'https://github.com/Nikunjvadher/iNotebook---React',
    demo: 'https://github.com/Nikunjvadher/iNotebook---React'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image , title , github , demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target='_blank' rel='noreferrer' className='btn'>Github</a>
                  <a href={demo} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
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