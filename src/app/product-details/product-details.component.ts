import { Component, OnInit } from '@angular/core';
import { Product } from './../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from './../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit{
  product_id : number = 0
  product_list : Array<Product> = []
  product : any
  constructor(private activatedRoute : ActivatedRoute, private productService : ProductsService) { }

  ngOnInit(): void {
    this.product_id = this.activatedRoute.snapshot.params['id']
    
    this.productService.getSingleProduct(this.product_id).subscribe((res)=>
    this.product = res
    )
  }
}
