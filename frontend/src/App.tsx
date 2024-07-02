import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/homePage';
import Motorcycles from './page/motorcycles';
import { Navbar } from './components/navbar/navbar';
import AboutUsComponent from './page/aboutUs';
import Accessories from './page/accessories';
import ContactUs from './page/ContactUs';
import Cart from './page/cart';
import Profile from './page/profile';
import Tracing from './page/tracing';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="motorcycles" element={<Motorcycles />} />
            <Route path="accessories" element={<Accessories />} />
            <Route path="aboutus" element={<AboutUsComponent />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="cart" element={<Cart />} />
            <Route path='profile' element={<Profile />} />
            <Route path='tracing' element={<Tracing />} />
          </Route>

        </Routes>

      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
