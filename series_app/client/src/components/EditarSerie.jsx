import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import React, {useState, useEffect} from 'react'

const EditarSerie = () => {
    const [title, setTitle] = useState('')
    const [creador, setCreador] = useState('')
    const [rating, setRating] = useState('')
    const [genero, setGenero] = useState('')
    const [year, setYear] = useState('')
    const [portada, setPortada] = useState('')

    const [errors, setErrors] = useState({})

       // obtener id
       const {id} = useParams()
       // redireccionamiento
       const navigate = useNavigate()


       useEffect(()=>{
        axios.get(`http://localhost:8000/api/unaserie/${id}`, {withCredentials:true})
        .then((res)=>{
            console.log(res)
            setTitle(res.data.title)
            setCreador(res.data.title)
            setRating(res.data.rating)
            setGenero(res.data.genero)
            setYear(res.data.year)
            setPortada(res.data.portada)
        }).catch((err)=>{
            console.log(err)
            
        })
    }, [])


    const submitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/editarserie/${id}`, {
            title,
            creador,
            rating,
            genero,
            year,
            portada
        }, {withCredentials:true})
        .then((res)=>{
            console.log(res);
            navigate('/todasseries')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

  return (
    <div className='col-6 mx-auto'>
        <h1> Formulario para editar una serie</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor=""className='form-label'> Titulo Serie</label>
            <input type="text" value={title} className='form-control'onChange={(e)=>setTitle(e.target.value)}/>
            {errors.title ? <span className='text-danger'>{errors.title.message} </span>: null} <br />
            <label htmlFor=""className='form-label'> Creador</label>
            <input type="text" value={creador} className='form-control'onChange={(e)=>setCreador(e.target.value)}/>
            {errors.creador ? <span className='text-danger'>{errors.creador.message} </span>: null} <br />
            <label htmlFor=""className='form-label'> Rating</label>
            {/* <input type="text" value={rating}className='form-control'onChange={(e)=>setRating(e.target.value)}/> */}
            <select className="form-control" value={rating} onChange={(e)=>setRating(e.target.value)}>
                <option>Select A Rating</option>
                <option value="G">G</option>
                <option value="PG">PG</option>
                <option value="PG-13">PG-13</option>
                <option value="R">R</option>
                <option value="NC-17">NC-17</option>
            </select>
            <label htmlFor=""className='form-label'> Genero</label>
            {/* <input type="text" value={genero} className='form-control' onChange={(e)=>setGenero(e.target.value)}/> */}
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
            <label htmlFor=""className='form-label'> Year</label>
            <input type="number"value={year} className='form-control'onChange={(e)=>setYear(e.target.value)}/>
            <label htmlFor=""className='form-label'> Portada</label>
            <input type="text" value={portada}className='form-control'onChange={(e)=>setPortada(e.target.value)}/>
            <button className='btn btn-success mt-3'> Crear Serie </button>

        </form>
    </div>
  )
}

export default EditarSerie