import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CustomerSaveComponent } from './component/customer-save/customer-save.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'customer-list',component:CustomerListComponent,canActivate:[AuthGuard]},
  {path:'customer-save',component:CustomerSaveComponent,canActivate:[AuthGuard]},
  {path:'customer-edit/:email',component:CustomerEditComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
