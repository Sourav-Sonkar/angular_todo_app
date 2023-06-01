import { Component } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { TodoModel } from '../model/todomodel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  search: String = '';
  filteredTodos: TodoModel[] = [];
  constructor(private todoService:TodoService) { }

  searchTodos(){
    this.filteredTodos=this.todoService.filteredTodos(this.search);
  }
}
