import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  product_list : Array<Product> = []

  constructor(private productService : ProductsService){}

  ngOnInit(){
    this.productService.getProductList().subscribe((res)=>
      this.product_list = res.products
      // console.log(res)
      
    )
  }
}
