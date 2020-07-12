import React from 'react';
import logo from './logo.svg';
import './App.css';

// data
import data from './static/data'

// components
import Header from './components/Header/Header'
import About from './components/About/About'
import Resume from './components/Resume/Resume'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="App">
      <Header data={data.main}/>
      <About data={data.main}/>
      <Resume data={data.resume}/>
      <Projects data={data.portfolio}/>
      <Contact data={data.main}/>
    </div>
  );
}

export default App;
