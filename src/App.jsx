import React from 'react';
import DSATracker from './DSATracker'; // CSS already loaded in index.js

const App = () => {
    return (
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
                <section id="about">
                    <h2>About Me</h2>
                </section>

                <section id="portfolio">
                    <h2>Portfolio</h2>
                </section>

                <section id="skills">
                    <h2>Skills</h2>
                </section>

                <section id="dsa-tracker">
                    <DSATracker />
                </section>
            </main>

            <footer>
                <p>&copy; 2025 Shubham Gautam. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default App;
