import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Main} from './pages/main/Main'
import {Services} from './pages/services/Services'
import { AboutUsPage } from './pages/about-us/AboutUsPage';
function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/main' element={<Main />} />
          <Route path='/services' element={<Services />} />
          <Route path='/aboutUs' element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
