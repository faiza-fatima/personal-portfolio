import React from 'react'
import Profile from "../../assets/home.jpg"
import {Link} from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import "./home.css"
const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home__img' />
      <div className='home__content'>
      <div className='home__data'>
      <h1 className='home__title'>
        <span> I'm Faiza Fatima</span> -A Full Stack Developer
        </h1>
        <p className='home__description'>
        I'm a full-stack web artisan from India, who thrives on crafting sleek and powerful web applications.
         I blend creativity with technical expertise to bring digital ideas to life, from stunning front-end designs to robust back-end solutions. 
         Always on the lookout for the next challenge, I turn code into captivating experiences. 
        Let's build something amazing together!
        </p>
        <Link to='/about' className='button'>
        More About Me <span className='button__icon'><FaArrowRight/>
        </span>
        </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  )
}

export default Home