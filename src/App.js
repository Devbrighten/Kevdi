import React, { Suspense, lazy, useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TopNavbar from './Components/TopNavbar';
import ScrollTop from './Components/Elements/ScrollTop';
import Loader from './Components/Elements/Loader'; // Loader component as a fallback
// Lazy-loaded components
const Home = lazy(() => import('./Components/Home/Home'));
const Products = lazy(() => import('./Components/Products/Products'));
const ProductPage = lazy(() => import('./Components/ProductPage/ProductPage'));
const About = lazy(() => import('./Components/About/About'));
const Contact = lazy(() => import('./Components/Contact/Contact'));
const Service = lazy(() => import('./Components/Service/Service'));

const App = () => {
  const [isReady, setIsReady] = useState(false);

  // Set a 2-second delay before showing the content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  return (
    <Router>
      {/* Scroll to the top when the component mounts (page change) */}
      <ScrollTop /> 



      <TopNavbar />
      {/* Conditionally render components after 2 seconds */}
      {isReady ? (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products' element={<Products />} />
            <Route path='products/:id' element={<ProductPage />} />
            <Route path='about' element={<About />} />
            {/* <Route path='/service' element={<Service />} /> */}
            <Route path='contact' element={<Contact />} />
          </Routes>
        </Suspense>
      ) : (
        <Loader /> // Show the loader while waiting
      )}
    </Router>
  );
};

export default App;
