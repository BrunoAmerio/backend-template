import { Schema, model } from 'mongoose'
import { uuid as uuidv4 } from 'uuidv4'

const productSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discountPercentage: {
    type: Number
  },
  images: {
    type: [String],
    required: true
  },

  owner: {
    type: String,
    ref: 'Shops',
    required: true
  },

  variables: [
    {
      nameKey: {
        type: String
      },
      isColor: {
        type: Boolean
      },
      variables: [
        {
          name: {
            type: String
          },
          images: {
            type: [String]
          },
          colorToDisplay: {
            type: String
          }
        }
      ]
    }
  ],

  stock: {
    type: [String],
    required: true
  },
  sku: {
    type: String,
    required: true
  },

  weightAndMeasurements: {
    weight: {
      type: Number,
      required: true
    },
    depth: {
      type: Number
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  },

  sales: {
    quantity: {
      type: Number
    },
    orders: {
      type: [String],
      ref: 'Orders'
    },
    collected: {
      type: Number
    }
  },

  category: {
    type: String,
    ref: 'Categories'
  },
  comments: {
    type: [String],
    ref: 'Comments'
  }
})

const Product = model('Product', productSchema, 'Products')

export default Product
