
import { useSelector } from 'react-redux'

import { Routes, Route } from "react-router-dom";

import { Home } from './pages';
import { Chevron, Footer, Navbar } from './components';

import ScrollToTop from './utilities/ScrollToTop'

function App() {
  const height = useSelector(state => state.height)

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      {height > 500 && <Chevron />}
      <Footer />
    </>
  );
}

export default App;
