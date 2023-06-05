import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntityDetailsComponent } from './entity-details/entity-details.component';
import { EntityComponent } from './entity.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { EntityListComponent } from './entity-list/entity-list.component';
const routes: Routes = [
  {path:'entity', component:EntityComponent},
  {path:'entity-details', component:EntityDetailsComponent },
  {path: 'entity-list', component: EntityListComponent},
  {path:'nav-bar', component:NavBarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnittyRoutingModule { }
 