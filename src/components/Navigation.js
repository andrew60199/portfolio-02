import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul>
      <li>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'active-button' : 'button'}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#work"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'active-button' : 'button'}
        >
          Work
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'active-button' : 'button'}
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'active-button' : 'button'}
        >
          Resume
        </a>
      </li>
    </ul>
    </nav>
    
  );
}

export default Navigation;
