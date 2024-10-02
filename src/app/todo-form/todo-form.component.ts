import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../types';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  identifier: number = 3;
  todo: string = '';

  @Output() newTodoAdded = new EventEmitter<Todo>();

  handleTodoSubmission(event: Event) {
    event.preventDefault();

    const newTodo: Todo = {
      id: ++this.identifier,
      whatTodo: this.todo,
      isCompleted: false,
    };
    this.newTodoAdded.emit(newTodo);
    this.todo = ''; // clearing it
  }
}
