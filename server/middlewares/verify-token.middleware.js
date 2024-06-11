// TODO: ESTO DEBERÍA ESTAR EN LA DB
const whiteListWebToken = ['/v1/user/login', '/v1/user/register']

const verifyTokenMiddleware = async (request, response) => {
  try {
    const requestURL = request.routeOptions.url
    console.log('Req from', requestURL)

    if (!requestURL || whiteListWebToken.includes(requestURL)) {
      return
    }

    const decodedToken = await request.jwtVerify()

    console.log('decodedToken', decodedToken)
  } catch (error) {
    console.error('verifyTokenMiddleware:', error.message)

    response.status(error.statusCode).send({
      code: error.code,
      message: error.message
    })
  }
}

export default verifyTokenMiddleware
