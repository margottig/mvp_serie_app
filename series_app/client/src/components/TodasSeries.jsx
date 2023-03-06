import React,{useState, useEffect}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const TodasSerires = ({socket}) => {

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
        setLista(lista.filter((serie)=> serie._id !== idBorrado))
    })

  return (
    <div className='d-flex flex-wrap mt-5'>
        {
            lista.map((serie, indice)=>(
                <div key={indice}>
                    <h2> {serie.title}</h2>
                    <Link  to={`/unaserie/${serie._id}`} className='d-block'> Mas Info</Link>
                    <img  alt={serie.title} key={serie._id} src={serie.portada} className='col col-4'/>
                </div>
            ))
        }
    </div>
  )
}

export default TodasSerires