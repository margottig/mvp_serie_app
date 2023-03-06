const ControladorUsuarios = require('../controllers/user.controller')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) =>{
    app.post('/api/registrar', ControladorUsuarios.registrarUsuario) 
    app.post('/api/login', ControladorUsuarios.loginUsuario) 
    app.get('/api/logout', authenticate ,ControladorUsuarios.logOutUser) 
    app.get('/api/isLogged', authenticate, ControladorUsuarios.isLogged)
}