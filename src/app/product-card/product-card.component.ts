import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { CounterService } from './../services/counter.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product = {
    "title":"",
    "images":[''],
    "rating":0,
    "stock":0,
    "description":"",
    "price":"",
    "id":"",
    "thumbnail":""
  }
  counter = 0

  constructor(private router: Router, private CounterService : CounterService) { }

  ngOnInit(): void {
    this.CounterService.counterval.subscribe((res) => this.counter=res)    
  }

  redirectToCart(){
    this.increaseCounter()
    this.router.navigate(['/product-cart',this.product.id])
  }

  product_details(){
    this.router.navigate(['/product-details',this.product.id])
  }
  
  increaseCounter(){
    this.CounterService.changeCounter(++this.counter)
  }
}