import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MainPage } from './MainPage';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="*" element={<div>404</div>}/>
      </Routes>
    </Router>
  );
}

export default App;
