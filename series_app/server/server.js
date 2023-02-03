// CONFIGURACION
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 8000
require('dotenv').config()
const cookieParser = require('cookie-parser')

// SOCKET (interacion con el modelo serie)
const socket = require('socket.io')  
const Serie = require('./models/serie.model')

// requerir archivo de configuracion
require('./config/mongoose.config')


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// middleware que agregar cookies a la solicitud
app.use(cookieParser())

//CORS 
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))


// IMPORTAR LAS RUTAS DE NUESTRO SERVIDOR BACK-END
const Rutas = require('./routes/serie.routes')
Rutas(app)
const rutasUsuarios = require('./routes/user.routes')
rutasUsuarios(app)


const server = app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

// configuracion cabecera socket
const io = socket(server, {
    cors:{
        origin:'*',
        methods:['GET', 'POST']
    }
})


io.on('connection', (socket)=>{
    console.log(" usuario conectado",socket.id)
    socket.on("borrarSerie", (payload)=>{
        console.log("payload", payload)
        Serie.deleteOne({_id:payload})
        .then((res)=>{
            io.emit('serieBorrada', payload)
        }).catch((err)=>{
            console.log(err, "error al borrar serie")
        })
    })

    socket.on('disconectar', (socket)=>{
        console.log(`el usuario con id ${socket.id} acaba de desconectarse`)
    })
 

})