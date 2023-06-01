import { Injectable } from '@angular/core';
import { TodoModel } from '../model/todomodel';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoList: TodoModel[] = [];
  constructor() {
    this.todoList = localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList') as string) : [];
  }

  getTodos() {
    return this.todoList;
  }

  addTodos(todomodel: TodoModel) {
    this.todoList.push(todomodel);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  filteredTodos(search: String) {
    return this.todoList.filter(todo => todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

  deleteTodos(todoId: String) {
    this.todoList = this.todoList.filter(todo => todo.id !== todoId);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));

  }

  changeStatus(todoId: String) {
    this.todoList.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  updateTodos(todoModel: TodoModel) {
    this.todoList.map(todo => {
      if (todo.id === todoModel.id) {
        todo.title = todoModel.title;
        todo.description = todoModel.description;
        todo.dueDate = todoModel.dueDate;
      }
    });
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}
