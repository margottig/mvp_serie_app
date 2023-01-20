import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const EditarSerie = () => {
    const [titulo, setTitulo] = useState('')
    const [creador, setCreador] = useState('')
    const [rating, setRating] = useState('')
    const [genero, setGenero] = useState('')
    const [year, setYear] = useState('')
    const [portada, setPortada] = useState('')

      // edicion de objeto-documento
    //   const [serie, setSerie] = useState({})
    
      // obtener id de url
      const {id} = useParams()
      const navigate = useNavigate()

      
  useEffect(() => {
        axios.get(`http://localhost:8000/api/obtenerunaserie/${id}`)
        .then((res)=>{
            console.log(res)
            setTitulo(res.data.title)
            setCreador(res.data.creador)
            setRating(res.data.rating)
            setGenero(res.data.genero)
            setYear(res.data.year)
            setPortada(res.data.portada)
        }).catch((err)=>{
            consolo.log(err)
        })
    }, [])


    const submitHandler = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/editarserie/${id}`, {
            titulo,
            creador,
            rating,
            genero,
            year,
            portada
        }).then((res)=>{
            console.log(res);
            navigate('/todaseries')
        }).catch((err)=>{
            console.log(err)
        })
    }


  return (
    <div className='col-6 mx-auto'>
        <h1> Editar Serie Animada</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor=""  className='form-label'>Titulo</label>
            <input type="text" value={titulo} className='form-control' onChange={(e)=>setTitulo(e.target.value)}/>
            <label htmlFor="" className='form-label'>Creador</label>
            <input type="text" value={creador} className='form-control'onChange={(e)=>setCreador(e.target.value)}/>
            <label htmlFor="" className='form-label'> Rating</label>
            {/* <input type="text" className='form-control'onChange={(e)=>setRating(e.target.value)}/> */}
            <select className="form-control" value={rating} onChange={(e)=>setRating(e.target.value)}>
                <option>Select A Rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
            </select>
            <label htmlFor="" className='form-label'>Genero</label>
            {/* <input type="text" className='form-control'onChange={(e)=>setGenero(e.target.value)}/> */}
            <select type="text" value={genero} className="form-control" onChange={(e)=>setGenero(e.target.value)} >
                <option>Select a Genre</option>
                <option value="Comedia">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Action">Action</option>
                <option value="Family">Family</option>
            </select>
            <label htmlFor="" className='form-label'> Año</label>
            <input type="number" value={year}className='form-control'onChange={(e)=>setYear(e.target.value)}/>
            <label htmlFor="" className='form-label'> Portada</label>
            <input type="text" value={portada} className='form-control'onChange={(e)=>setPortada(e.target.value)}/>
            <button className='btn btn-success mt-3'> Editar Serie</button>
        </form>
    </div>
  )
}

export default EditarSerie