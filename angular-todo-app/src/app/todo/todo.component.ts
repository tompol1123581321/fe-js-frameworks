import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  tasks = [{ label: 'Task 1', id: '1' }, { label: 'Task 2', id: '2' }, { label: 'Task 3', id: '3' }];
  newTask = '';

  addTask() {
    this.tasks.push({ label: this.newTask, id: String(Math.random() * 10000) });
    this.newTask = '';
  }
  deleteTask(task: Todo) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id)
  }
}
