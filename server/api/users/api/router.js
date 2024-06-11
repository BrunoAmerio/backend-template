import loginRoute from './routes/login.js'
import registerRoute from './routes/register.js'

const userPreFix = {
  prefix: '/user'
}

const userRoutes = (app, opts, done) => {
  app.route(loginRoute)
  app.route(registerRoute)

  done()
}

export { userRoutes, userPreFix }
