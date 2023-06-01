import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { StoretodoComponent } from './storetodo/storetodo.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    component:TodolistComponent,
    path:''
  }
  ,{
    component:StoretodoComponent,
    path:'storetodo/:id?'
  },
  {
    component:StoretodoComponent,
    path:'storetodo'
  },
  {
    component:SearchComponent,
    path:'search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
