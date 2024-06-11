import { userRoutes, userPreFix } from './users/api/router.js'

const api = (app, opts, done) => {
  app.register(userRoutes, userPreFix)

  done()
}

export default api
