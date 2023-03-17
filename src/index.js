import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactView from './components/Contact/ContactView';
import AutoDetail from './components/AutoDetail/AutoDetail';
import Auto from './components/Autos/Autos';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <React.StrictMode>
  <BrowserRouter>

  <Routes>
        <Route exact path="/" element={<Auto />} />
        <Route exact path="/auto/:id" element={<AutoDetail />} />
        <Route exact path="contact" element={<ContactView />} />
  </Routes>

  </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

