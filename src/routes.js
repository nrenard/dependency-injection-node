import KoaRouter from 'koa-router'
import { makeInvoker } from 'awilix-koa'

import controllers from './app/controllers'

const router = new KoaRouter()

const methods = dependences => {
  const constrollersInjecteds = controllers.map(controller => controller(dependences))
  
  let methodsInjectds = {}

  constrollersInjecteds.forEach(controllerInjectedd => {
    methodsInjectds = {
      ...methodsInjectds,
      ...controllerInjectedd
    }
  })

  return methodsInjectds
}

const api = makeInvoker(methods)

router.get('/todos', (ctx, next) => {
  ctx.state.eu = true;
  
  next()
}, api('getTodos'))

export default router