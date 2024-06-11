import loginSchema from '../schemas/login.js'
import loginController from '../controllers/login.js'

const logInController = {
  method: 'POST',

  url: '/login',

  schema: loginSchema,

  handler: loginController
}

export default logInController
