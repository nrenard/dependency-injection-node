import KoaRouter from 'koa-router'
import { makeInvoker } from 'awilix-koa'

const router = new KoaRouter()

const methods = ({ todosService }) => ({
  getTodos: async (ctx) => {
    console.log('ctx.state: ', ctx.state)

    const todos = await todosService.getTodos(ctx.request)
    ctx.body = todos
    ctx.status = 200
  },
})
const api = makeInvoker(methods)

router.get('/todos', (ctx, next) => {
  ctx.state.eu = true;
  
  next()
}, api('getTodos'))

export default router