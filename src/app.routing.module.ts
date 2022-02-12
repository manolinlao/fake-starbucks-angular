import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './app/main/pages/main/main.component';
import { GiftcardsComponent } from './app/main/pages/giftcards/giftcards.component';
import { RewardsComponent } from './app/main/pages/rewards/rewards.component';
import { MenuComponent } from './app/main/pages/menu/menu.component';
import { FindComponent } from './app/main/pages/find/find.component';
import { LoginComponent } from './app/auth/pages/login/login.component';
import { RegisterComponent } from './app/auth/pages/register/register.component';
import { FeaturedComponent } from './app/main/pages/featured/featured.component';
import { PreviousComponent } from './app/main/pages/previous/previous.component';
import { FavoritesComponent } from './app/main/pages/favorites/favorites.component';
import { ProductsComponent } from './app/main/pages/products/products.component';
import { ProductsCategoryComponent } from './app/main/pages/products-category/products-category.component';
import { ProductComponent } from './app/main/pages/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
  },
  {
    path: 'gift',
    component: GiftcardsComponent
  },
  {
    path: 'rewards',
    component: RewardsComponent
  },  
  {
    path: 'menu',
    component: MenuComponent,
    children:[
      {
        path:'',
        component: ProductsComponent
      },
      {
        path:'products',
        component: ProductsComponent,       
      },
      {
        path:'featured',
        component: FeaturedComponent
      },
      {
        path:'previous',
        component: PreviousComponent
      },
      {
        path:'favorites',
        component: FavoritesComponent
      },
      {
        path:'subcategory/:id',
        component: ProductsCategoryComponent
      },
      {
        path: 'product/:id',
        component: ProductComponent
      }
    ]
  },
  {
    path: 'find',
    component: FindComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes, {scrollPositionRestoration: 'enabled'} )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
