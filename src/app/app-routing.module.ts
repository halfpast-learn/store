import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { MainViewComponent } from './main-view/main-view.component';
import { ProductFeedComponent } from './product-feed/product-feed.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', component:MainViewComponent},
  {path:'profile', component:ProfileComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
