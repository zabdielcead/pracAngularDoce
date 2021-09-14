import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'registro',
        component:RegistroComponent
      },
      {
        path:'**',
        redirectTo:'login'
      }
    ]
  }
]


@NgModule({
  
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
