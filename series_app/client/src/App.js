import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {io} from 'socket.io-client';
import { useState, useEffect } from 'react';
import SerieForm from './components/SerieForm';
import Navbar from './components/Navbar';
import SeriesList from './components/SeriesList';
import EditarSerie from './components/EditarSerie';
import UnaSerie from './components/UnaSerie';
import Registro from './components/Registro';
import Login from './components/Login';

function App() {

  //set de socket desde el cliente
  const [socket] = useState(()=>io(':8000'))

  useEffect(()=>{
    socket.on('connection', ()=>{
      console.log(' coneccion establecida al servidor')
    })
    return ()=> socket.disconnect(true); // esto sucedera cuando salimos de la pagina o refrescamos
  },[])





  return (
    <div className="App">
      {/* <SerieForm/> */}
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/nuevaserie' element={<SerieForm/>}/>
          <Route path='/unaserie/:id' element={<UnaSerie socket={socket}/>}/>
          <Route path='/editarserie/:id' element={<EditarSerie/>}/>
          <Route path='/todaseries'element={<SeriesList socket={socket}/>}/>
          <Route path='/registro'element={<Registro/>}/>
          <Route path='/login'element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
