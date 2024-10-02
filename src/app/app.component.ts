import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../types';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import id from '@angular/common/locales/id';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent, TodoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TO DO LIST APP AGAIN !!!';

  addNewTodo(todo: Todo) {
    console.log('Old Todo list : ', this.TodoList());
    this.TodoList.update((list) => [...list, todo]);
    console.log('New Todo list : ', this.TodoList());
  }

  gettingTheIdForChecking(todo: Todo) {
    return todo;
  }

  TodoList = signal<Todo[]>([
    {
      id: 1,
      whatTodo: 'Todo1 description',
      isCompleted: true,
    },
    {
      id: 2,
      whatTodo: 'Todo2 description',
      isCompleted: false,
    },
    {
      id: 3,
      whatTodo: 'Todo3 description',
      isCompleted: false,
    },
  ]);

  updatingInputCheck(todo: Todo) {
    this.TodoList.update((list) =>
      list.map((item) =>
        item.id === todo.id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }
}
