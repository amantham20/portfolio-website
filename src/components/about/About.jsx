import React from 'react'

import './about.css'

import ME from '../../assets/Aman Logo.png'

import {BiCoffeeTogo} from 'react-icons/bi'
import {FaPizzaSlice} from 'react-icons/fa'
import {AiOutlineProject} from 'react-icons/ai'


const About = () => {
  return (
    <section className='about' id='about'>
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
          I am a student by day and developer by night; pursuing a major in Computer Science, and Mathematics and a Minor in CMSE, and Entrepreneurship & Innovation at Michigan State University. I have been studying computer science since High School. My main interests include algorithm and computer theory, cloud technology, and ML/AI. I also dabble in other aspects of Engineering and web development.
          </p>

          <p>
          I'm involved in a variety of extracurriculars on campus, including AI club, Entrepreneurship club, and the Engineering Student Council. </p>

          <p>
            I also love traveling, listening to overplayed music and Coffee.
          </p>


          <div className='live_block'><span class="blink_me">Live <span class="dot"></span></span></div>
          <div className='about__cards'>
            <artice className='about__card'>
              <BiCoffeeTogo className='about__icon'/>
              <h5>21</h5>
              <small>Cups of Coffee Drank</small>
            </artice>
            <artice className='about__card'>
              <FaPizzaSlice className='adjust_icon'/>
              <h5>31</h5>
              <small>Slices of Pizza</small>
            </artice>
            <artice className='about__card'>
              <AiOutlineProject  className='about__icon' />
              <h5>21</h5>
              <small>Projects Completed</small>
            </artice>



          </div>
            <a href="#contact" className='btn About_Page'>More about me!</a>
        </div>
      </div>




    </section>
  )
}

export default About