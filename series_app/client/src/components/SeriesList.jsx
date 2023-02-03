import React, {useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import {Socket, io}  from 'socket.io-client'

const SeriesList = ({socket}) => {
    const [lista, setLista] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/obtenerseries', {withCredentials:true})
        .then((res)=>{
            console.log(res)
            setLista(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    socket.on('serieBorrada', (idBorrado)=>{
        console.log("serie borrado con id es:", idBorrado)
        setLista(lista.filter((serie)=> serie._id !== idBorrado))
    })

  return (
    <div className='d-flex flex-wrap mt-5'>
        {
            lista.map((serie, indice)=>(
                <div key={indice}>
                {/* <p>{serie}</p> */}
                <h2>{serie.title}</h2>
                <Link to={`/unaserie/${serie._id}`} className="d-block"> Mas Info </Link>
                <img src={serie.portada} className="col col-4"/>
                </div>
            ))
        }

    </div>
  )
}

export default SeriesList