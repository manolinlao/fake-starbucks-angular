import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { GiftcardsComponent } from './pages/giftcards/giftcards.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FindComponent } from './pages/find/find.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { PreviousComponent } from './pages/previous/previous.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AppRoutingModule } from '../../app.routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ProductsCategoryComponent } from './pages/products-category/products-category.component';
import { ProductComponent } from './pages/product/product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    RewardsComponent,
    GiftcardsComponent,
    MenuComponent,
    FindComponent,
    FeaturedComponent,
    PreviousComponent,
    FavoritesComponent,
    ProductsComponent,
    SidebarComponent,
    ProductsCategoryComponent,
    ProductComponent,    
  ],
  exports: [
    MainComponent,
    RewardsComponent,
    GiftcardsComponent,
    MenuComponent,
    FindComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule   
  ]
})
export class MainModule { }
