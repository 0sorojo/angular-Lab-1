import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

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

  constructor() {}

  ngOnInit(): void {}
}
