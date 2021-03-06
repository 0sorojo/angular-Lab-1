import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'thing1',
      complete: false,
    },
    {
      task: 'thing2',
      complete: false,
    },
    {
      task: 'thing3',
      complete: true,
    },
  ];

  searchTerm: string;

  showIndex: number;

  constructor() {}

  addTask(form: NgForm) {
    let newTask: Todo = {
      task: form.value.task,
      complete: false,
    };
    this.todos.push(newTask);
    form.reset();
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  completeTask(index: number) {
    this.todos[index].complete = true;
  }

  setSearchTerm(form: NgForm) {
    this.searchTerm = form.value.searchTerm.trim().toLowerCase();
  }

  filter() {
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((gottaGetDone) => {
        let currentTodo = gottaGetDone.task.toLowerCase().trim();
        return currentTodo.includes(this.searchTerm);
      });
    }
  }

  setShowIndex(index: number) {
    this.showIndex = index;
  }

  resetShowIndex() {
    this.showIndex = undefined;
  }

  ngOnInit(): void {}
}
