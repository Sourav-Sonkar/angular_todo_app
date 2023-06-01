import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { TodoModel } from '../model/todomodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storetodo',
  templateUrl: './storetodo.component.html',
  styleUrls: ['./storetodo.component.css']
})
export class StoretodoComponent {
  title: String = ''; description: String = ''; dueDate: String = ''; id: String = '';
  constructor(private todoService: TodoService, private router: Router) { }
  ngOnInit() {
    let id = this.router.url.split('/')[2];
    if (id) {
      let todo = this.todoService.getTodos().filter(todo => todo.id === id)[0];
      this.title = todo.title;
      this.description = todo.description;
      this.dueDate = todo.dueDate;
      this.id = todo.id;
    }
  }

  editTodos() {
    let todoModel = new TodoModel(
      this.id,
      this.title,
      this.description,
      false,
      this.dueDate
    );
    this.todoService.updateTodos(todoModel);
  }
  addTodos() {
    if (this.id !== '') {
      this.editTodos();
    } else {
      let todoModel = new TodoModel(
        (new Date().getTime()).toString(36),
        this.title,
        this.description,
        false,
        this.dueDate
      );
      this.todoService.addTodos(todoModel);
    }
    this.title = ''; this.description = ''; this.dueDate = '';
    this.router.navigate(['/']);
  }


}
