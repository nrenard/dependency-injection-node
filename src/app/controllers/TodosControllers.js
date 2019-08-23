class TodosControlellers {
  constructor(dependences) {
    this.dependences = dependences
  }

  async index (ctx) {
    const todos = await this.dependences.todosService.getTodos(ctx.request.query)
    ctx.body = todos
    ctx.status = 200
  }
}

export default TodosControlellers