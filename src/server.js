import Koa, {  } from 'koa'
import helmet from 'koa-helmet'
import cors from '@koa/cors'

import containers from './containers'

import router from './routes'

class Server {
  constructor() {
    this.koa = new Koa()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.koa.use(helmet())
    this.koa.use(cors())
    
    this.koa.use(containers)
    this.koa.use((ctx, next) => {
      // ctx.state.container.registerValue({
      //   currentUser: ctx.state.user
      // })

      return next()
    })
  }

  routes () {
    this.koa.use(router.routes())
  }
}

export default new Server().koa