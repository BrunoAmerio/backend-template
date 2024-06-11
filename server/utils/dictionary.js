const ok = (response, body) => {
  response.status(200).send(body)
}

const created = (response, body) => {
  response.status(201).send(body)
}

const badRequest = (response, body) => {
  response.status(400).send(body)
}

const unauthorized = (response, body) => {
  response.status(401).send(body)
}

const notPermisson = (response, body) => {
  response.status(403).send({ body })
}

const notFound = (response, body) => {
  response.status(404).send({ body })
}

export default {
  ok,
  created,
  badRequest,
  unauthorized,
  notPermisson,
  notFound
}
