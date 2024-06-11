import registerSchema from '../schemas/register.js'
import createNewUserController from '../controllers/create-new-user.js'

const registerController = {
  method: 'POST',

  url: '/register',

  schema: registerSchema,

  handler: createNewUserController
}

export default registerController
