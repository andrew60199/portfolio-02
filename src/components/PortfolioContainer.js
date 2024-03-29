import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer'
import Navigation from './Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact';
import Resume from './pages/Resume'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </>
  );
}
