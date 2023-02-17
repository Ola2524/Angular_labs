import { Component, OnInit } from '@angular/core';
import { CounterService } from './../services/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  counter = 0
  constructor(private CounterService : CounterService) { }

  ngOnInit(){
    this.CounterService.counterval.subscribe((res) => this.counter=res)
  }
}
