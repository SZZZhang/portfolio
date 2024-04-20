import React from 'react';
import './App.css';
import { Router, Route, browserHistory, IndexRoute, HashRouter } from "react-router-dom";

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import NotFound from './Components/NotFound';
import AboutMe from './Components/AboutMe';


function App() {
  return (
    
    <div className="App">
      <HashRouter basename="/" hashType="noslash">
        <Navbar/>
        <switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/projects' component={ Projects } /> 
          <Route exact path='/aboutme' component={ AboutMe } />
          <Route component={ NotFound }/>
        </switch>
      </HashRouter>
    </div>
  );
}

export default App;
