import { Schema, model } from 'mongoose'
import { uuid as uuidv4 } from 'uuidv4'

const shopSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  logo: {
    type: String
  },
  owner: {
    type: String,
    ref: 'Users'
  },

  contactInformation: {
    email: {
      type: String
    },
    phone: {
      type: String
    },
    address: {
      type: String
    }
  },

  socialMedia: {
    instagram: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    }
  },

  pages: {
    type: [String],
    ref: 'Pages'
  },
  products: {
    type: String,
    ref: 'Product'
  },
  categories: {
    type: [String],
    ref: 'Categories'
  },
  messages: {
    type: [String],
    ref: 'Messages'
  },
  orders: {
    type: [String],
    ref: 'Orders'
  },
  coupons: {
    type: [String],
    ref: 'Coupons'
  },
  promotions: {
    type: [String],
    ref: 'Promotions'
  }
})

const Shop = model('Shop', shopSchema, 'Shops')

export default Shop
