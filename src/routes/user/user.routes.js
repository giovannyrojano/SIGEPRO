const { Router } = require('express')
const { check } = require('express-validator')
const { newUser, Login } = require('./user.controller')
const validations = require('../../middlewares/validations')
const router = Router()

router.get('/', (request, response) => {
  response.send('ruta de usuarios')
})
router.post('/login', Login)
router.post(
  '/register',
  [
    check('email', 'el correo ingresado no es valido').isEmail(),
    check(
      'password',
      'la contraseña es obligatoria y debe tener mas de 6 caracteres'
    ).isLength({ min: 6 }),
    validations,
  ],
  newUser
)

module.exports = router
