import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'

const UnaSerie = ({socket}) => {
    // edicion de objeto
    const [serie, setSerie] = useState({})

    // obtener id
    const {id} = useParams()
    // redireccionamiento
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/unaserie/${id}`, {withCredentials:true})
        .then((res)=>{
            console.log(res)
            setSerie(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    const borrarSerie = ()=>{
        socket.emit('borrarSerie', id)
        navigate('/todasseries')

        // axios.delete(`http://localhost:8000/api/borrarserie/${id}`)
        // .then((res)=>{
        //     console.log(res)
        //     navigate('/todasseries')
        // }).catch((err)=>{
        //     console.log(err)
        // })
    }

  return (
    <div>
        <img src={serie.portada} alt="" />
        <p> Titulo: {serie.title}</p>
        <p> Year: {serie.year}</p>
        <p> Creador: {serie.creador}</p>
        <p> Fecha en la que se guardo esto: {serie.createdAt}</p>
        <Link to={`/editarserie/${id}`} > Editar Serie </Link>
        <button className='btn btn-danger' onClick={borrarSerie}> Borrar Serie </button>
    </div>
  )
}

export default UnaSerie