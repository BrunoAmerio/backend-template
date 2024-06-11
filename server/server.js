import Fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'

import connectToDB from './configs/db.config.js'

import verifyTokenMiddleware from './middlewares/verify-token.middleware.js'

import apiV1 from './api/index.js'

const fastify = Fastify()

fastify.register(fastifyJwt, { secret: process.env.JWT_SECRET })
fastify.register(cors, { origin: '*' })

fastify.addHook('onRequest', verifyTokenMiddleware)

// API VERSIONS (for now we have only one)
fastify.register(apiV1, { prefix: '/v1' })

async function initServer() {
  try {
    await connectToDB()

    await fastify.listen({ port: process.env.PORT })

    const serverPort = fastify.server.address().port
    console.log(` ---- 🚀 SERVER LISTEN ON PORT ${serverPort} 🚀 ---- `)
  } catch (error) {
    console.log(' ----  ⛔ ERROR TRYING TO START THE SERVER ⛔ ---- ')
    console.log(error)
  }
}

initServer()
