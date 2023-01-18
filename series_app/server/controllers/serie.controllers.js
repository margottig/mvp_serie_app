const Series = require('../models/serie.model')


const obtenerSeries = (req, res)=>{
    Series.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const obtenerUnaSerie = (req, res)=>{
    Series.findById(req.params.id)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const crearSerie =  (req, res)=>{
    Series.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const editarSerie = (req, res)=>{
    Series.updateOne({_id: req.params.id}, req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}


const eliminarSerie = (req, res)=>{
    Series.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    obtenerSeries,
    obtenerUnaSerie,
    crearSerie,
    editarSerie,
    eliminarSerie
}