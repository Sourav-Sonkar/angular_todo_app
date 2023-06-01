import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { TodoModel } from '../model/todomodel';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  todoList: TodoModel[] = [];
  constructor(private todoService: TodoService) {
    this.todoList = this.todoService.getTodos();
  }

  deleteTodos(todoId: String) {
    this.todoService.deleteTodos(todoId);
    this.todoList = this.todoService.getTodos();
  }
  
  changeStatus(todoId: String) {
    this.todoService.changeStatus(todoId);
    this.todoList = this.todoService.getTodos();
  }
}
