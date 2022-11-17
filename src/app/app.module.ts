import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IgxComboModule } from 'igniteui-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ProductFeedComponent } from './product-feed/product-feed.component';
import { FilterComponent } from './filter/filter.component';
import { HeaderComponent } from './header/header.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ProductFeedComponent,
    FilterComponent,
    HeaderComponent,
    ProductCardComponent,
    FooterComponent,
    CartComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule,
    IgxComboModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
