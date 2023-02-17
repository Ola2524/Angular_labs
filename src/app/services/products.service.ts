import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }
  getProductList() : Observable<any>{
    return this.http.get('https://dummyjson.com/products')
  }

  getSingleProduct(id : number) : Observable<any>{    
    const link = 'https://dummyjson.com/products/'+id
    return this.http.get(link)
  }

  getProductDetails(){
    
  }
}
