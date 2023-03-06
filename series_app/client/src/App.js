import logo from './logo.svg';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {io} from 'socket.io-client'
import SerieFormulario from './components/SerieFormulario';
import TodasSeries from './components/TodasSeries';
import BarraNavegacion from './components/BarraNavegacion';
import UnaSerie from './components/UnaSerie';
import EditarSerie from './components/EditarSerie';
import Registro from './components/Registro';
import Login from './components/Login';
import PrivateRoute from './pages/PrivateRoute';
import Main2 from './pages/Main2';


function App() {
  // const [loaded, setLoaded] = useState(false)

  const [socket] = useState(()=>io(":8000"))

  useEffect(()=>{
    socket.on('connection', ()=>{
      console.log('coneccion establecida al servidor')
    })
    return ()=>  socket.disconnect(true); // esto sucede cuando refresh o salir de la pagina
  }, [])

  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <BarraNavegacion/>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path='/nuevaserie' element={<SerieFormulario/>}/>
          <Route path='/unaserie/:id' element={<UnaSerie socket={socket}/>}/>    
          <Route path='/editarserie/:id' element={<EditarSerie/>}/>   
          {/* <Route path='/todasseries' element={<TodasSerires socket={socket}/>}/>   */}
          <Route path='/registro' element={<Registro/>}/>  
          <Route path='/login' element={<Login/>}/> 

          <Route
          path="/others"
          element={
            <PrivateRoute>
              <Main2/>
            </PrivateRoute>
          }/>

          <Route element={<PrivateRoute />}>
            <Route path='/todasseries' element={<Main2/>}/>         
          </Route>
          

        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
