import React from 'react'

import './header.css'

import CTA from './CTA'
// import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
   <header>
    <a href='' target="_blank" className='btn resumebtn sm-none'>Résumé</a>
     <div className='container header__container'>
       {/* <div className='nametag'>
         
       </div> */}

       <div className='content_iam_sm lg-md-none'>
           <h1>
           Hey, I am
           </h1>
           <h1>
               Aman Dhruva Thamminana
           </h1>
              <h1 className='b1'>a Front end developer</h1>
              <h1 className='b2'>a Tech enthusiast</h1>
              <h1 className='b3'>a Programmer</h1>
              <h1 className='b4'>a Web Deigner</h1>
              <h1 className='b5'>an Engineer</h1>
              <h1 className='b6'>a Gamer</h1>

                <a href='' target="_blank" className='btn'>Résumé</a>

       </div>
        <div className='content_iam sm-none'>
        <table>
            <tr>
                <th></th>
                <th>
                    <h1 class="txt rest top3">a Gamer</h1>
                </th>
            </tr>
            <tr>
                <th></th>
                <th>
                    <h1 class="txt rest top2">a Tech enthusiast</h1>
                </th>
            </tr>
            <tr>
                <th></th>
                <th>
                    <h1 class="txt rest top1">a Front end developer</h1>
                </th>
            </tr>
            <tr>
                <th>
                    <h1 class="txt center">Hey, I am&nbsp;</h1>
                </th>
                <th>
                    <h1 class="txt center">Aman Dhruva Thamminana</h1>
                </th>
            </tr>
            <tr>
                <th></th>
                <th>
                    <h1 class="txt rest bottom1">a Programmer</h1>
                </th>
            </tr>
            <tr>
                <th></th>
                <th>
                    <h1 class="txt rest bottom2">a Web-deigner</h1>
                </th>
            </tr>
            <tr>
                <th></th>
                <th>
                    <h1 class="txt rest bottom3">an Engineer</h1>
                </th>
            </tr>
        </table>
        </div>

        





      {/* <h5>Hello I am</h5> */}
      {/* <h1>Aman Dhruva Thamminana</h1> */}
      {/* <h5 className='text-light'>I'm a Developer</h5>  */}

      {/* <CTA /> */}
      <HeaderSocials />

      {/* <div className="me">
        <img src={ME} alt='me'></img>
      </div> */}

      {/* <a href="#contact" className='scroll_down'> scroll down</a> */}




     </div>
   </header>
  );
}

export default Header