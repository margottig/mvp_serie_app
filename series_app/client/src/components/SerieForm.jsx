import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const SerieForm = () => {
    const [title, setTitle] = useState('')
    const [creador, setCreador] = useState('')
    const [rating, setRating] = useState('')
    const [genero, setGenero] = useState('')
    const [year, setYear] = useState('')
    const [portada, setPortada] = useState('')

    const navigate = useNavigate()


    const submitHandler = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/crearserie', {
            title,
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
        <h1> Crear Serie Animada</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor=""  className='form-label'>Titulo Serie</label>
            <input type="text" className='form-control' onChange={(e)=>setTitle(e.target.value)}/>
            <label htmlFor="" className='form-label'>Creador</label>
            <input type="text" className='form-control'onChange={(e)=>setCreador(e.target.value)}/>
            <label htmlFor="" className='form-label'> Rating</label>
            {/* <input type="text" className='form-control'onChange={(e)=>setRating(e.target.value)}/> */}
            <select className="form-control" onChange={(e)=>setRating(e.target.value)}>
                <option>Select A Rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
            </select>
            <label htmlFor="" className='form-label'>Genero</label>
            {/* <input type="text" className='form-control'onChange={(e)=>setGenero(e.target.value)}/> */}
            <select type="text" className="form-control" onChange={(e)=>setGenero(e.target.value)} >
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
            <input type="number" className='form-control'onChange={(e)=>setYear(e.target.value)}/>
            <label htmlFor="" className='form-label'> Portada</label>
            <input type="text" className='form-control'onChange={(e)=>setPortada(e.target.value)}/>
            <button className='btn btn-success mt-3'> Crear Serie</button>
        </form>
    </div>
  )
}

export default SerieForm