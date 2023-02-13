import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})

export class TodoAppComponent {
  @Output() emitToParent = new EventEmitter();
  item : string;

  constructor(){
    this.item = "";
  }

  SendToParent(val:string){
    this.emitToParent.emit(val)
  }
}
