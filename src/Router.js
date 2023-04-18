import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Introduce from './pages/Introduce/Introduce'

  const Router = () => {
    return (
      <BrowserRouter>
                                       
        <Routes>
          <Route path="/" element={<Introduce />} />
        </Routes>
                                      
      </BrowserRouter>
    );
    }


    export default Router;