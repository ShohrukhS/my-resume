import React from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/ProjectsFolder/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;