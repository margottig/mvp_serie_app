const mongoose = require('mongoose')

// Schema
const SerieSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true, "Por favor incluir titulo"],
        minLength:[3, "Titulo debe incluir al menos 3 caracteres"]
    },
    creador:{
        type:String,
        required:[true, " Por favor agrega un creador" ]
    },
    rating:{
        type:String,
        enum: ['G','PG','PG-13','R','NC-17'],
        required:[true, "Por favor elegir rating"],
    },
    genero:{
        type:String,
        enum: [
            'Comedia',
            'Drama',
            'Horror',
            'Sci-Fi',
            'Fantasy',
            'Action',
            'Family'],
            required:[true, "Por favor selecciona un genero"],
    },
    year:{
        type:Number
    },
    portada:{
        type:String
    }
},{timestamps:true})

const Series = mongoose.model('Series', SerieSchema)
module.exports = Series