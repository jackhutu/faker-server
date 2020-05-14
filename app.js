const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const User = require('./user')

router.get('/user', (ctx, next)=>{
  ctx.body = User()
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)