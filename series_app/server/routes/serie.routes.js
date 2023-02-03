const ControladorSeries = require('../controllers/serie.controllers')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) =>{
    // app.get('/api/obtenerseries',authenticate , ControladorSeries.obtenerSeries ) 
    // app.get('/api/obtenerunaserie/:id', authenticate, ControladorSeries.obtenerUnaSerie)
    // app.post('/api/crearserie', authenticate, ControladorSeries.crearSerie) 
    // app.put('/api/editarserie/:id', authenticate, ControladorSeries.editarSerie)
    // app.delete('/api/borrarserie/:id', authenticate, ControladorSeries.eliminarSerie)
    app.get('/api/obtenerseries',  ControladorSeries.obtenerSeries ) 
    app.get('/api/obtenerunaserie/:id',  ControladorSeries.obtenerUnaSerie)
    app.post('/api/crearserie',  ControladorSeries.crearSerie) 
    app.put('/api/editarserie/:id',  ControladorSeries.editarSerie)
    app.delete('/api/borrarserie/:id',  ControladorSeries.eliminarSerie)
}