// Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>                                  // 1                               
      <Routes>                                       // 2                            
        <Route path="/" element={<Components />} />  // 3
      </Routes>
    </BrowserRouter>
  );
};

export default Router;