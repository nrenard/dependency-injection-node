import KoaRouter from 'koa-router'
import { makeInvoker } from 'awilix-koa'

const router = new KoaRouter()

const controllers = ({ todosService }) => {
  return {
    getTodos: async (ctx) => {
      const todos = await todosService.getTodos(ctx.request)
      ctx.body = todos
      ctx.status = 200
    },
  }
}

const api = makeInvoker(controllers)

router.get('/todos', api('getTodos'))

export default router