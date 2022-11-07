import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Body from './components/Body'
import Footer from './components/Footer';
import './App.css';

function App() {
  const [ currentPage, setCurrentPage ] = useState('about');

  const renderPage = () => {
    if (currentPage === 'about') return <About/>;
    if (currentPage === 'contact') return <Contact/>;
    if (currentPage === 'projects') return <Projects/>;
    if (currentPage === 'resume') return <Resume/>;
  }

  const changePage = (page) => setCurrentPage(page);

  return (
    <>
        <Header/>
        <Navigation currentPage={ currentPage } changePage={ changePage }/>
        <Body renderPage={ renderPage }/>
        <Footer/>
    </>
  )    
}

export default App;
