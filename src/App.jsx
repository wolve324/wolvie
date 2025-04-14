// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DSATracker from './DSATracker';
import Home from './Home'; // if you have a separate Home component

import '../public/styles.css';

const App = () => {
  return (
    <BrowserRouter basename="/wolvie">
      <div className="App">
        <header>
          <h1>Shubham Gautam's Portfolio</h1>
          <nav>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#dsa-tracker">DSA Tracker</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={
              <div>
                <section id="about">
                  <h2>About Me</h2>
                  {/* Content */}
                </section>

                <section id="portfolio">
                  <h2>Portfolio</h2>
                  {/* Content */}
                </section>

                <section id="skills">
                  <h2>Skills</h2>
                  {/* Content */}
                </section>

                <section id="dsa-tracker">
                  <DSATracker />
                </section>
              </div>
            } />
            <Route path="/dsatracker" element={<DSATracker />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2025 Shubham Gautam. All Rights Reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
