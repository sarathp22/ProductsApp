import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'


const routes: Routes = [{path:'',component:ProductListComponent,canActivate:[AuthGuard]},{path:'add',component:NewProductComponent,canActivate:[AuthGuard]},{path:'edit/:id',component:EditProductComponent,canActivate:[AuthGuard]},{path:'signup',component:SignupComponent},{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
