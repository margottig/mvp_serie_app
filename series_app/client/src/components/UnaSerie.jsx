import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const UnaSerie = ({socket}) => {   
     // edicion de objeto-documento
     const [serie, setSerie] = useState({})
    
     // obtener id de url
     const {id} = useParams()
     const navigate = useNavigate()

     useEffect(()=>{
        axios.get(`http://localhost:8000/api/obtenerunaserie/${id}`, {withCredentials:true})
        .then((res)=>{
            setSerie(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    const deleteHandler =()=>{
        socket.emit('borrarSerie', id)
        navigate('/todaseries')
        // axios.delete(`http://localhost:8000/api/borrarserie/${id}`)
        // .then((res)=>{
        //     navigate('/todaseries')
        // }).catch((err)=>{
        //     console.log(err)
        // })
    }


  return (
    <div className='col-6 mx-auto'>
        <img src={serie.portada} className="col col-4 mx-auto" />
        <p> Titulo: {serie.title}</p>
        <p> Creador: {serie.creador}</p>
        <p> Genero: {serie.genero}</p>
        <Link to={`/editarserie/${id}`}> Editar Serie </Link>
        <button className="btn btn-danger" onClick={deleteHandler}>Delete Serie</button>

    </div>
  )
}

export default UnaSerie