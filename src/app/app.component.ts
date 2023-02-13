import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab2';
  lists : string[];

  constructor(){
    this.lists = [];
  }

  receiveFromChild(value:any){
    this.lists.push(value);
  }
}
