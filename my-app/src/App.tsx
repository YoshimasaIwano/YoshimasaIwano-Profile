import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { TopNav } from './TopNav';
import { Profile } from './Profile';
import { Project } from './Project';
import { Resume } from './Resume';
import { Gallery } from './Gallery';

function App(): JSX.Element {
  return (
    <div className="fixed top-0 left-0 relative vh-100 w-100 overflow-y-scroll">
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="/Home" element={<Profile />}/>
          <Route path="/Project" element={<Project />}/>
          <Route path="/Resume" element={<Resume />}/>
          <Route path="/Gallery" element={<Gallery />}/>
          <Route path="*" element={<div>404</div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
