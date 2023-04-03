import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const portfolio = () => {
  return (
      <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">

          <article className='portfolio_item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt='Movie App'/>
            </div>
            <h3>Movie Search App</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com/PsychoTM/movieapp-darius' className='btn'>Github</a>
            {/* <a href='' className='btn btn-primary'>Live Demo</a> */}
            </div>
            </article>

            <article className='portfolio_item'>
            <div className="portfolio__item-image">
              <img src={IMG2} alt='Notes App'/>
            </div>
            <h3>Notes App</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com/PsychoTM/Notes-App' className='btn'>Github</a>
            {/* <a href='' className='btn btn-primary'>Live Demo</a> */}
            </div>
              </article>

              <article className='portfolio_item'>
            <div className="portfolio__item-image">
              <img src={IMG3} alt='Library Database'/>
            </div>
            <h3>Library Database</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com/PsychoTM/LibraryDB' className='btn'>Github</a>
            {/* <a href='' className='btn btn-primary'>Live Demo</a> */}
            </div>
              </article>

              <article className='portfolio_item'>
            <div className="portfolio__item-image">
              <img src={IMG4} alt='Hand Eye Coordination Training Tool'/>
            </div>
            <h3>Hand Eye Coordination Training Tool</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com/PsychoTM/Dissertation-w18001162' className='btn'>Github</a>
            {/* <a href='' className='btn btn-primary'>Live Demo</a> */}
            </div>
              </article>

              <article className='portfolio_item'>
            <div className="portfolio__item-image">
              <img src={IMG5} alt='ThreeJS Solar System'/>
            </div>
            <h3>ThreeJS Solar System</h3>
            <div className="portfolio__item-cta">
            <a href='https://github.com/805ale/SolarSystem-' className='btn'>Github</a>
            {/* <a href='' className='btn btn-primary'>Live Demo</a> */}
            </div>
              </article>

              <article className='portfolio_item'>
            <div className="portfolio__item-image">
              <img src={IMG6} alt='Teddy'/>
            </div>
            <h3>Teddy RPG Proof of Concept</h3>

            <div className="portfolio__item-cta">
            <a href='https://github.com/805ale/Teddy' className='btn'>Github</a>
            {/* <a href='' className='btn btn-primary'>Live Demo</a> */}
            </div>
          </article>
        </div>
      </section>
  )
}

export default portfolio