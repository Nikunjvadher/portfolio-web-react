import React from 'react'
import app from './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Service from './components/Services/Service';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Service/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App;
