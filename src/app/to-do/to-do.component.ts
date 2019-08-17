import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  todos: object[];
  todoTitle : string;
  constructor() { }

  ngOnInit() {
    this.todoTitle='';
    this.todos =[
      {
        'id': 1,
        'title': 'Finish Angular Screencast',
        'completed': false,
        'editing': false,
      },
      {
        'id': 2,
        'title': 'Take over world',
        'completed': false,
        'editing': false,
      },
      {
        'id': 3,
        'title': 'One more thing',
        'completed': false,
        'editing': false,
      },
    ];
    
  }
  addTodo(){
    this.todos.push({
      id:4,
      title:this.todoTitle,
      completed:false,
      editing:false,
    })
  }

}
