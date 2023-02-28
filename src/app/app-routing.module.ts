import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { AuthGuard } from './auth.guard';
import { MyformComponent } from './myform/myform.component';

const routes: Routes = [
  {
    path:'app-home',
    component:HomeComponent,
    canActivate:[AuthGuard],
    pathMatch:'full'
  },
  {
    path:'',
    component:MyformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
