import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { component } from 'vue/types/umd';
import { NavBarComponent } from './nav-bar.component';
import { NavLeftComponent } from './nav-left/nav-left.component';

const routes: Routes = [

  {path:'NavBarComponent', component:NavBarComponent},
  {path:'NavLeftComponent', component:NavLeftComponent},
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavBarRoutingModule { }
