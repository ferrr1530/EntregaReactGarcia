import React from 'react'
import ItemContainer from './components/ItemContainer'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactView from './components/Contact/ContactView';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function Landing () {
   
  return (
  <>
  <BrowserRouter>
  <div>
  < Navbar/>
  <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="contact" element={<ContactView />} />
  </Routes>
  < ItemContainer greeting="Bienvenidos a la tienda F/G"/>
  </div>
  </BrowserRouter>
   </>
  );
}

export default Landing