import React from 'react'

import './about.css'

import ME from '../../assets/Aman Logo.png'

import {BiCoffeeTogo} from 'react-icons/bi'
import {FaPizzaSlice} from 'react-icons/fa'
import {AiOutlineProject} from 'react-icons/ai'
import {AiFillProject} from 'react-icons/ai'


const About = () => {
  return (
    <section className='about sect' id='about'>
      <div className='heading_info'>
        <h5>Get To Know</h5>
        <h1>About Me!</h1>

      </div>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me__img'>
            <img src={ME}/>
          </div>
        </div>    
     



        <div className='about__content'>
          
          <p>
          Student by day and developer by night; Currently pursuing a major in Computer Science, and Mathematics and a Minor in Computational Mathematics, Science & Engineering &#40;CMSE&#41;, and 
          Entrepreneurship & Innovation at Michigan State University. I fell in love with computer science from High School. My main interests include algorithms and computer theory, cloud technology, and 
          Machine Learning/Artificial intelligence. I also dabble in other aspects of Engineering, web and mobile development.
          </p>

          <p>
          I'm involved in a variety of extracurriculars on campus, including AI club, Entrepreneurship club, and the Engineering Student Council. </p>

          <p>
            I also love traveling, listening to overplayed music and consuming too much coffee.
          </p>


          <div className='live_block'><span class="blink_me">Live <span class="dot"></span></span></div>
          <div className='about__cards'>
            <artice className='about__card'>
              <BiCoffeeTogo className='about__icon'/>
              <h5>518</h5>
              <small>Cups of Coffee Drank</small>
            </artice>
            <artice className='about__card'>
              <FaPizzaSlice className='adjust_icon'/>
              <h5>230</h5>
              <small>Slices of Pizza Consumed</small>
            </artice>
            <artice className='about__card'>
              <AiFillProject  className='about__icon' />
              <h5>21</h5>
              <small>Projects Completed</small>
            </artice>
            <artice className='about__card'>
              <AiOutlineProject  className='about__icon' />
              <h5>3</h5>
              <small>Current Projects</small>
            </artice>



          </div>
            <a href="#contact" className='btn About_Page'>More about me!</a>
        </div>
      </div>




    </section>
  )
}

export default About