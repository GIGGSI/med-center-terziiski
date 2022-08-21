import { useEffect, useCallback, useState } from 'react';

import { setHeight } from './actions'
import { useDispatch } from 'react-redux'
import { Routes, Route } from "react-router-dom";

import { Home } from './pages';
import { Chevron, Footer, Navbar } from './components';

import ScrollToTop from './utilities/ScrollToTop'

import './App.css';


function App() {
  const dispatch = useDispatch()
  const [chevron, setChevron] = useState(0)

  const handleHeight = useCallback(() => {
    dispatch(setHeight(window.scrollY))
    setChevron(window.scrollY)

  }, [dispatch])

  useEffect(() => {
    window.addEventListener("scroll", () => handleHeight());

    return () => {
      window.removeEventListener("scroll", () => handleHeight());
    };
  }, [handleHeight]);


  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      {chevron > 500 && <Chevron />}
      <Footer />
    </>
  );
}

export default App;
