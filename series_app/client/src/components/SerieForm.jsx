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

    const [errors, setErrors] = useState({})

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
            console.log(res, "LLega por THEN");
            navigate('/todaseries')
        }).catch((err)=>{
            console.log(err, "LLEGA POR CATCH")
            setErrors(err.response.data.errors)
        })
    }


  return (

    <div className='col-6 mx-auto'>
        <h1> Crear Serie Animada</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor=""  className='form-label'>Titulo Serie</label>
            <input type="text" className='form-control' onChange={(e)=>setTitle(e.target.value)}/>
            {errors.title ? <span className='text-danger'> {errors.title.message}</span> : null }<br></br>
            <label htmlFor="" className='form-label'>Creador</label>
            <input type="text" className='form-control'onChange={(e)=>setCreador(e.target.value)}/>
            {errors.creador ? <span className='text-danger'>{errors.creador.message} </span>: null} <br />
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
            {errors.rating ? <span className='text-danger'> {errors.rating.message}</span> : null }<br></br>
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
            {errors.genero ? <span className='text-danger'> {errors.genero.message}</span> : null }<br></br>
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