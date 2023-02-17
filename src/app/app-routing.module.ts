import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ProductListComponent
  },
  {
    path: "product-cart/:id",
    component: CartComponent,
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true]
  },
  {
    path: "product-cart",
    component: CartComponent,
  },
  {
    path: "product-details/:id",
    component: ProductDetailsComponent,
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => true]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
