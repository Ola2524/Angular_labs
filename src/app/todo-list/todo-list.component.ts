import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() lists : any;

  constructor(){
    
  }
  
  ngOnInit():void{
  
  }

  complete(val:any){
    val.style.textDecoration = "line-through";;
  }

  delete(list:any,val:any){
    list.splice(val,1);
  }
}

