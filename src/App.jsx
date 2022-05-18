import React from 'react'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'

import CustomCursor from './CustomCursor'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProjectsPage from './components/project_page/ProjectsPage'
import AboutPage from './components/about_page/AboutPage'


const App = () => {
  return (
    <>
        {/* <CustomCursor /> ask about custom CustomCursor */}
        <Header />
        <Nav />
        <About />
        <Experience />
        <Contact />
        <Footer />
{/* 
        <Router>
         <Route path='/aboutme' component={AboutPage}/> 
         <Route path='/projects' component={ProjectsPage}/>
        </Router> */}

        

        
        
    
    </>
  );
}

export default App



