import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { TopNav } from './TopNav';
import { Footer } from './Footer';
import { Profile } from './component/main-contents/Profile';
import { Project } from './component/main-contents/Project';
import { Resume } from './component/main-contents/Resume';
import { Gallery } from './component/main-contents/Gallery';
import { DefaultPage } from './component/main-contents/Project';
import { GraduationResearch } from './component/project-detail/GraduationResearch';
import { CSC317 } from './component/project-detail/CSC317';
import { CSC600 } from './component/project-detail/CSC600';

function App(): JSX.Element {
  return (
    <div className="fixed top-0 left-0 relative vh-100 w-100 overflow-y-scroll">
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="/Home" element={<Profile />}/>
          <Route path="/Project" element={<Project />}>
            <Route index element={<DefaultPage />}/>
            <Route path="GraduationResearch" element={<GraduationResearch />}/>
            <Route path="CSC317" element={<CSC317 />}/>
            <Route path="CSC600" element={<CSC600 />}/>
            <Route path="*" element={<div>404</div>}/>
          </Route>
          <Route path="/Resume" element={<Resume />}/>
          <Route path="/Gallery" element={<Gallery />}/>
          <Route path="*" element={<div>404</div>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
