import { CounterService } from './../services/counter.service';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Array<Product> = []
  counter = this.cart.length
  product_id : number = 0
  product : any

  constructor(private activatedRoute : ActivatedRoute,private CounterService : CounterService, private productService : ProductsService) { }
  ngOnInit(): void {
    this.product_id = this.activatedRoute.snapshot.params['id']
    
    this.CounterService.counterval.subscribe((res) => this.counter=res)    

    this.productService.getSingleProduct(this.product_id).subscribe((res)=>
    this.product = res
    // console.log(res)
  )
  }

  decreaseCounter(){
    this.CounterService.changeCounter(--this.counter)
  }

  pushItem(){
    this.cart.push(this.product)
    // this.CounterService.changeCounter(++this.counter)
  }
}
