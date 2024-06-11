import { Schema, model } from 'mongoose'
import { USER_TYPES, USER_TYPES_ENUM } from '../utils/user.types.js'
import { uuid as v4 } from 'uuidv4'

const userSchema = new Schema(
  {
    _id: {
      type: String,
      default: v4
    },

    email: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },

    dni: {
      type: Number
    },

    address: {
      street: {
        type: String
      },
      city: {
        type: String
      },
      state: {
        type: String
      },
      postalCode: {
        type: String
      }
    },

    phone: {
      type: String
    },

    name: {
      type: String,
      required: true
    },

    lastName: {
      type: String,
      required: true
    },

    type: {
      type: String,
      enum: USER_TYPES_ENUM,
      default: USER_TYPES.customer
    },

    adminRoles: {
      type: String,
      default: null
    },

    ecommerce: {
      type: String,
      default: null,
      ref: 'Shops'
    },

    membership: {
      type: String,
      enum: ['free'],
      default: 'free'
    },

    orders: {
      type: [String],
      ref: 'Orders'
    },

    messages: {
      type: [String],
      ref: 'Messages'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const User = model('User', userSchema, 'users')
export default User
