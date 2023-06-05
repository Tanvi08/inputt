import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLeftComponent } from './nav-bar/nav-left/nav-left.component';
import { EntityComponent } from './entity/entity.component';
import { EntityDetailsComponent } from './entity/entity-details/entity-details.component';
import { EntityListComponent } from './entity/entity-list/entity-list.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavLeftComponent,
    EntityComponent,
    EntityDetailsComponent,
    EntityListComponent,
  
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
