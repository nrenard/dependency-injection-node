import { createContainer, asClass, asFunction } from 'awilix'
import { scopePerRequest } from 'awilix-koa'

import makeTodosService from './todosService'
import TodosRepository from './todosRepository'

const containers = () => {
  const container = createContainer()
  
  container.register({
    todosService: asFunction(makeTodosService).scoped(),
    todosRepository: asClass(TodosRepository).singleton()
  })
  
  return container
}

export default scopePerRequest(containers());