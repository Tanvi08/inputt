import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityComponent } from './entity/entity.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EntityDetailsComponent } from './entity/entity-details/entity-details.component';

const routes: Routes = [
  {
    path:'', component: EntityDetailsComponent,
    children: [

      
     ]
    
  },

   {
    path:'entity', loadComponent:()=>
    import('./entity/entity.component').then(mod => mod.EntityComponent)
  }, 
 
 {
   path:'',
   component: NavBarComponent,

   children: [

    {
      path:'',
      redirectTo:'nav-bar',
      pathMatch:'full'
    }, 
    {
      path:'nav-left',
      loadChildren:()=> import('./nav-bar/nav-bar.module').then(module =>module.NavBarModule)
    },
   ] 
 } 
   
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
