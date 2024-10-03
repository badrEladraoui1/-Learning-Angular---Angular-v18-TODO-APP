import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  standalone: true,
  imports: [],
  templateUrl: './todo-filter.component.html',
  styleUrl: './todo-filter.component.css',
})
export class TodoFilterComponent {
  @Output() filterDone = new EventEmitter<boolean>();
  @Output() filterTodos = new EventEmitter<boolean>();
  @Output() filterReset = new EventEmitter<boolean>();

  filteringDone() {
    this.filterDone.emit(true);
  }
  filteringTodos() {
    this.filterTodos.emit(true);
  }
  resetingFilter() {
    this.filterReset.emit(true);
  }
}
