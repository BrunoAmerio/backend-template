import Bcrypt from 'bcrypt'
import User from '../../models/user.model.js'
import response from '../../../../utils/dictionary.js'

const loginController = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    response.badRequest(res, {
      code: 'USER_VALIDATION',
      msg: 'Email and password must be provided'
    })
  }

  try {
    const user = await User.findOne({ email }).lean()

    if (!user) {
      throw new Error('User not found')
    }

    const isValidPassword = await Bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      throw new Error('Password mismatch')
    }

    delete user.password

    response.ok(res, { user })
  } catch (error) {
    response.badRequest(res, { error: error.message })
  }
}

export default loginController
