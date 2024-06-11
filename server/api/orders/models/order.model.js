import { Schema, model } from 'mongoose'
import { uuid as uuidv4 } from 'uuidv4'

const orderSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4
  },
  number: {
    type: String,
    required: true
  },
  buyer: {
    type: String,
    ref: 'Users',
    required: true
  },
  shop: {
    type: String,
    ref: 'Shops',
    required: true
  },
  deliveryMethod: {
    type: String,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },

  subTotal: {
    discountPercentage: {
      type: Number
    },
    deliveryCost: {
      type: Number,
      required: true
    },
    taxes: {
      type: Number
    },
    itemsPriceTotal: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
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

  trackingNumber: {
    type: String
  },

  status: {
    payment: {
      type: String,
      required: true
    },
    delivery: {
      type: String,
      required: true
    },
    global: {
      type: String,
      required: true
    }
  },

  items: [
    {
      subTotal: {
        price: {
          type: Number,
          required: true
        },
        discountPercentage: {
          type: Number
        },
        taxes: {
          type: Number
        },
        total: {
          type: Number,
          required: true
        }
      },

      product: {
        type: String,
        required: true
      },
      variables: {
        type: Object,
        required: true
      }
    }
  ],

  coupon: {
    type: String,
    ref: 'Coupons'
  },
  promotion: {
    type: String,
    ref: 'Promotions'
  }
})

const Order = model('Order', orderSchema, 'Orders')

export default Order
