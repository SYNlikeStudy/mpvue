const Koa = require('koa')
const KoaRouter = require('koa-router')
const {get} = require('./utils/request')

const app = new Koa()
const router = new KoaRouter()

router.get('/',async (ctx, next) => {
  //1.接受请求参数
  const {req} = ctx.query
  //2.处理请求数据 -> 调用数据库数据 -> 操作数据(CRUD)
  //3.返回响应数据
  ctx.body = '厉害的服务器的响应数据!!!'
})
const datas = require('./datas/data.json')
router.get('/searchBooks',async (ctx, next) => {
  //1.接受请求参数
  const {req} = ctx.query
  //2.处理请求数据 -> 调用数据库数据 -> 操作数据(CRUD)
  //const url = `https://api.douban.com/v2/book/search?q=${req}`
  //const result = await get(url)
  //3.返回响应数据
  ctx.body = datas
})
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen('3000',() => {
  console.log('服务器启动成功');
})
