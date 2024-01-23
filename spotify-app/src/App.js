import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage'
import AlbumPage from './pages/AlbumPage';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
    <>

      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/album/:id' element={<AlbumPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>

    </>
  );
}

export default App;
