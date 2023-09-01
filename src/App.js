import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Footer from './components/Common/Footer';
import Launch from './pages/Launch';
import Brands from './pages/Brands';
import BrandDetails from './pages/BrandDetails';
import Dine from './pages/Dine';
import DineDetails from './pages/DineDetails';
import Luxury from './pages/Luxury';
import Leisure from './pages/Leisure';
import EventMain from './pages/EventMain';
import EventDetails from './pages/EventDetails';
import Header from './components/Common/Navbar';
import SignUp from './pages/SignUp';
import LuxuryCategory from './pages/LuxuryCategory';
import LuxuryDetails from './pages/LuxuryDetails';
import Services from './pages/Services';
import OfferPackages from './pages/OffersPackages';
import Gift from './pages/Gift';
import Leasing from './pages/Leasing';
import About from './pages/About';
import Careers from './pages/Careers';
import News from './pages/News';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import TermsConditions from './pages/tc';

function App() {
  return (
    <Routes>
      <Route path='/' element={<><Home /><Footer/></>} />
      <Route path='/launch' element={<><Launch /><Footer/></>} />
      <Route path='/brands' element={<><Brands /><Footer/></>} />
      <Route path='/brand-detail' element={<><BrandDetails /><Footer/></>} />
      <Route path='/dine' element={<><Dine /><Footer/></>} />
      <Route path='/dine-detail' element={<><DineDetails /><Footer/></>} />
      <Route path='/luxury' element={<><Luxury /><Footer/></>} />
      <Route path='/leisure' element={<><Leisure /><Footer/></>} />
      <Route path='/events' element={<><EventMain /><Footer/></>} />
      <Route path='/event-details' element={<><EventDetails /><Footer/></>} />
      <Route path='/sign-up' element={<><SignUp /><Footer/></>} />
      <Route path='/luxury-category' element={<><LuxuryCategory /><Footer/></>} />
      <Route path='/luxury-details' element={<><LuxuryDetails /><Footer/></>} />
      <Route path='/services' element={<><Services /><Footer/></>} />
      <Route path='/offers-packages' element={<><OfferPackages /><Footer/></>} />
      <Route path='/gift' element={<><Gift /><Footer/></>} />
      <Route path='/leasing' element={<><Leasing /><Footer/></>} />
      <Route path='/about' element={<><About /><Footer/></>} />
      <Route path='/careers' element={<><Careers /><Footer/></>} />
      <Route path='/news' element={<><News /> <Footer/></>} />
      <Route path='/blogs' element={<><Blogs /> <Footer/></>} />
      <Route path='/blog-detail' element={<><BlogDetails /> <Footer/></>} />
      <Route path='/terms-conditions' element={<><TermsConditions /> <Footer/></>} />
    </Routes>
  );
}

export default App;
