import logo from './logo.svg';
import './App.css';
import SerieForm from './components/SerieForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SeriesList from './components/SeriesList';
import EditarSerie from './components/EditarSerie';
import UnaSerie from './components/UnaSerie';
import Registro from './components/Registro';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <SerieForm/> */}
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/nuevaserie' element={<SerieForm/>}/>
          <Route path='/unaserie/:id' element={<UnaSerie/>}/>
          <Route path='/editarserie/:id' element={<EditarSerie/>}/>
          <Route path='/todaseries'element={<SeriesList/>}/>
          <Route path='/registro'element={<Registro/>}/>
          <Route path='/login'element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
