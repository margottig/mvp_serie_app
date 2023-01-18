// CONFIGURACION
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

// requerir archivo de configuracion
require('./config/mongoose.config')



//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//CORS 
app.use(cors({
    origin:'http://localhost:3000'
}))


// IMPORTAR LAS RUTAS DE NUESTRO SERVIDOR BACK-END
const Rutas = require('./routes/serie.routes')
Rutas(app)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

