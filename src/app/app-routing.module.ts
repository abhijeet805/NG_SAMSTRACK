import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:'add-user',component:AddUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
