/**
 * json-server 基于express
 */
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const User = require('./user')

server.use(jsonServer.defaults())

server.get('/online', (req, res) => {
  res.jsonp({ users: Math.floor(Math.random() * 1000) })
})

server.get('/user', (req, res) => {
  res.jsonp(User())
})


server.use(router)

server.listen(3000)