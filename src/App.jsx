// App.js

import React, { useState } from 'react';
import './App.css';
import reactImg from './assets/norwintrading.logo.png';

function Header() {
  return (
    <header>
      <img src={reactImg} alt="React Logo" />
    </header>
  );
}

function Navbar({ onNavClick }) {
const barTitle = ['Home', 'About', 'Product', 'Calculator', 'Blog', 'Contact Us','',  'Sign In'];

  return (
    <div className="flex-container">
      {barTitle.map((title, index) => (
        <div key={index} onClick={() => onNavClick(title.toLowerCase())}>
          {title}
        </div>
      ))}
    </div>
  );
}

function HomeConcept(props) {
  return (
    <li>
      <img src={props.image} alt="Concept" />
      <p>{props.title}</p>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Initial page is 'home'

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <Navbar onNavClick={handleNavClick} />
      <main>
        {currentPage === 'home' && (
          <section id="home-concepts">
            <ul>
              <HomeConcept
                description="Get to know about the platform, the business, and the environment in the gold market industry."
                image="src/assets/jsx-ui.png"
              />
              <HomeConcept
                description="Get to know about the product in this platform and make a right decision before choosing your plan."
                image="src/assets/config.png"
              />
              <HomeConcept
                description="Features that will help you to calculate your profit or current situation."
                image="src/assets/components.png"
              />
              <HomeConcept
                description="Get to know the latest news, issues, and trends about gold."
                image="src/assets/state-mgmt.png"
              />
            </ul>
          </section>
        )}

        {currentPage === 'calculator' && (
          <section id="calculator-page">
            {/* Add your calculator page content here */}
            <h2>Calculator Page</h2>
            {/* Add more content as needed */}
          </section>
        )}

        {/* Add more conditions for other pages as needed */}
      </main>
    </div>
  );
}

export default App;
