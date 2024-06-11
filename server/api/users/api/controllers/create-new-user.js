import User from '../../models/user.model.js'
import Bcrypt from 'bcrypt'
import response from '../../../../utils/dictionary.js'

const createNewUserController = async (req, res) => {
  try {
    const body = req.body

    const newUser = new User(body)
    await newUser.validate()

    newUser.password = await Bcrypt.hash(body.password, 9)

    await newUser.save()

    response.created(res, { user: newUser })
  } catch (error) {
    response.badRequest(res, { error: error.message })
  }
}

export default createNewUserController
