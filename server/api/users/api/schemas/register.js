import { USER_TYPES_ENUM } from '../../utils/user.types.js'

const registerSchema = {
  body: {
    type: 'object',

    required: ['email', 'password', 'confirmPassword', 'name', 'lastName'],

    properties: {
      email: {
        type: 'string',
        format: 'email'
      },
      password: {
        type: 'string'
      },
      confirmPassword: {
        type: 'string'
      },

      address: {
        type: 'object',
        properties: {
          street: {
            type: 'string'
          },
          city: {
            type: 'string'
          },
          state: {
            type: 'string'
          },
          postalCode: {
            type: 'string'
          }
        }
      },

      phone: {
        type: 'string'
      },
      name: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      },
      type: {
        type: 'string',
        enum: USER_TYPES_ENUM
      },
      adminRoles: {
        type: 'string'
      },
      ecommerce: {
        type: 'string',
        format: 'uuid'
      },
      membership: {
        type: 'string'
      },
      orders: {
        type: 'array',
        items: {
          type: 'string',
          format: 'uuid'
        }
      },
      messages: {
        type: 'array',
        items: {
          type: 'string',
          format: 'uuid'
        }
      }
    }
  }
}

export default registerSchema
