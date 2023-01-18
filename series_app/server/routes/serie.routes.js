const ControladorSeries = require('../controllers/serie.controllers')

module.exports = (app) =>{
    app.get('/api/obtenerseries', ControladorSeries.obtenerSeries ) 
    app.get('/api/obtenerunaserie/:id', ControladorSeries.obtenerUnaSerie)
    app.post('/api/crearserie', ControladorSeries.crearSerie) 
    app.put('/api/editarserie/:id', ControladorSeries.editarSerie)
    app.delete('/api/borrarserie/:id', ControladorSeries.eliminarSerie)
}