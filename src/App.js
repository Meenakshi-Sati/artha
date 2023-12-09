import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './COMPONENTS/Signup/Signup';
import About from './COMPONENTS/About/About';
import Welcome from './COMPONENTS/Welcome/Welcome';
import Home from './COMPONENTS/Home/Home';
import CaseStudy from './COMPONENTS/Case Study/Case Study';
import Createnew from './COMPONENTS/Create New/Create New';
import MediaLibrary from './COMPONENTS/Media Library/Media Library';
import Settings from './COMPONENTS/Settings/Settings';
import Demo from './COMPONENTS/Demo/Demo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/caseStudy' element={<CaseStudy />} />
      <Route path='/createnew' element={<Createnew />} />
      <Route path='/medialibrary' element={<MediaLibrary />} />
      <Route path='/setting' element={<Settings />} />
      <Route path='/demo' element={<Demo />} />
    </Routes>
  );
}

export default App;
