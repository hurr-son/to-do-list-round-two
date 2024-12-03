class Project {
    constructor(name) {
      this.name = name;
      this.todos = [];
    }
  
    addTodo(todo) {
      if (todo && typeof todo === 'object') {
        this.todos.push(todo);
      } else {
        throw new Error('Invalid Todo');
      }
    }
  
    removeTodo(index) {
      if (index >= 0 && index < this.todos.length) {
        this.todos.splice(index, 1);
      } else {
        throw new Error('Index out of bounds');
      }
    }
  
    getTodo(index) {
      if (index >= 0 && index < this.todos.length) {
        return this.todos[index];
      } else {
        throw new Error('Index out of bounds');
      }
    }
  
    getTodos() {
      return this.todos;
    }
  
    updateTodo(index, updatedTodo) {
      if (index >= 0 && index < this.todos.length && typeof updatedTodo === 'object') {
        this.todos[index] = updatedTodo;
      } else {
        throw new Error('Invalid index or Todo');
      }
    }
  
    findTodoByTitle(title) {
      return this.todos.find(todo => todo.title === title);
    }
  }
  
  export default Project;
  