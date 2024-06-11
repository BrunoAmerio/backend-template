const loginSchema = {
  body: {
    type: 'object',

    required: ['email', 'password'],

    properties: {
      email: {
        type: 'string'
      },

      password: {
        type: 'string',
        nullable: false
      }
    }
  }
}

export default loginSchema
