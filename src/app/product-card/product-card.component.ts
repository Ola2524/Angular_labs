import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product = {
    "createdAt":"",
    "name":"",
    "image":"",
    "rate":0,
    "count":0,
    "description":"",
    "price":"",
    "reviews":[""],
    "id":""
  }

  constructor(private router: Router){

  }

  redirectToCart(){
    this.router.navigate(['/product-cart',this.product.id])
  }

  product_details(){
    this.router.navigate(['/product-details',this.product.id])
  }
  
}
