const Series = require('../models/serie.model')


const obtenerSeries = (req, res)=>{
    // console.log(req, "VERIFICAR SI HAY COOKIE AQUIIII")
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
        // console.log(resultado)
        res.json(resultado)
    }).catch((err)=>{
        // console.log(err)
        res.json(err)
    })
}

const crearSerie =  (req, res)=>{
    Series.create(req.body)
    .then((resultado)=>{
        // console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        // console.log(error)
        res.status(400).json(error)
    })
}

const editarSerie = (req, res)=>{
    Series.updateOne({_id: req.params.id}, req.body, {runValidators:true})
    .then((resultado)=>{
        // console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        // console.log(error)
        res.status(400).json(error)
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
    crearSerie,
    editarSerie,
    eliminarSerie,
    obtenerUnaSerie
}