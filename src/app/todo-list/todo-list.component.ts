import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../types';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Output() todoStatusChanged = new EventEmitter<Todo>();
  @Output() todoDelete = new EventEmitter<Todo>();

  onTodoStatusChange(todo: Todo) {
    this.todoStatusChanged.emit(todo);
  }

  onTodoDelete(todo: Todo) {
    this.todoDelete.emit(todo);
  }

  @Input() todoList: Todo[] = [];
}
