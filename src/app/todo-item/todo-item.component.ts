import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Todo } from '../../types';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Output() checkingTodo = new EventEmitter<Todo>();
  @Output() deletingTodo = new EventEmitter<Todo>();

  toggleChecking() {
    this.checkingTodo.emit(this.todo);
  }
  deleteTodo() {
    this.deletingTodo.emit(this.todo);
  }

  @Input() todo!: Todo;
}
