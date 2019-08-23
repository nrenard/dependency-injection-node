import { createContainer, asClass, asFunction } from 'awilix'
import { scopePerRequest } from 'awilix-koa'

import todosService from './app/services/todosService'
import TodosRepository from './app/models/TodosRepository'

const containers = () => {
  const container = createContainer()
  
  container.register({
    todosService: asFunction(todosService).scoped(),
    todosRepository: asClass(TodosRepository).singleton()
  })
  
  return container
}

export default scopePerRequest(containers());