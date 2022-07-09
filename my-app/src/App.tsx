import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './ScrollTop';
import { TopNav } from './TopNav';
import { Footer } from './Footer';
import { Profile } from './component/main-contents/Profile';
import { Project } from './component/main-contents/Project';
import { Resume } from './component/main-contents/Resume';
import { Gallery } from './component/main-contents/Gallery';
import { DefaultProjectPage } from './component/main-contents/Project';
import { GraduationResearch } from './component/project-detail/GraduationResearch';
import { CSC317 } from './component/project-detail/CSC317';
import { CSC600 } from './component/project-detail/CSC600';
import { Portfolio } from './component/project-detail/Portfolio';
import { DefaultGalleryPage } from './component/main-contents/Gallery';
import { Nightsky } from './component/picture-detail/Nightsky';
import { Landscape } from './component/picture-detail/Landscape';
import { Flower } from './component/picture-detail/Flower';
import { Food } from './component/picture-detail/Food';


function App(): JSX.Element {
  
  return (
    <div className="fixed top-0 left-0 relative vh-100 w-100 overflow-y-scroll">
      <Router>
        <ScrollToTop/>
        <TopNav />
        <Routes>
          <Route path="/" element={<Profile />}/>
          <Route path="/Home" element={<Profile />}/>
          <Route path="/Project" element={<Project />}>
            <Route index element={<DefaultProjectPage />}/>
            <Route path="GraduationResearch" element={<GraduationResearch />}/>
            <Route path="CSC317" element={<CSC317 />}/>
            <Route path="CSC600" element={<CSC600 />}/>
            <Route path="Portfolio" element={<Portfolio />}/>
            <Route path="*" element={<div>404</div>}/>
          </Route>
          <Route path="/Resume" element={<Resume />}/>
          <Route path="/Gallery" element={<Gallery />}>
            <Route index element={<DefaultGalleryPage />}/>
            <Route path="Nightsky" element={<Nightsky />}/>
            <Route path="Landscape" element={<Landscape />}/>
            <Route path="Flower" element={<Flower />}/>
            <Route path="Food" element={<Food />}/>
            <Route path="*" element={<div>404</div>}/>
          </Route>
          <Route path="*" element={<div>404</div>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
