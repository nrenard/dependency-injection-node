const TodosController = dependences => ({
  getTodos: async ctx => {
    console.log('ctx.state: ', ctx.state)

    const todos = await dependences.todosService.getTodos(ctx.request)
    ctx.body = todos
    ctx.status = 200
  }
})

export default TodosController