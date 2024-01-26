import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage'
import AlbumPage from './pages/AlbumPage';
import NavbarComponent from './components/NavbarComponent';
import SearchComponent from './components/SearchComponent';
import YourLibrary from './pages/YourLibrary';
import CustomFooterComponent from './components/CustomFooterComponent';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/album/:id' element={<AlbumPage />} />
          <Route path='/search/' element={<SearchComponent />} />
          <Route path='/yourlibrary/' element={<YourLibrary />} />
          <Route path='/notfound' element={<NotFoundPage />} />
        </Routes>
        <CustomFooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
