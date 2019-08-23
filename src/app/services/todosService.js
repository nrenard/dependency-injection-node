import assert from 'assert'

// Using object destructuring to make it look good.
export default function makeTodosService({
  todosRepository,
}) {
  assert(todosRepository, 'opts.todosRepository is required.')
  
  return {
    getTodos: async (request) => {
      console.log('request: ', request)
      const response = await todosRepository.get('a.')
      return response
    }
  }
}
