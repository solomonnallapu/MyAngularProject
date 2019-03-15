import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DynamicListingComponent } from './dynamic-listing/dynamic-listing.component';



const routes: Routes = [
   { path: 'component1', component: Component1Component},
   { path: 'header', component: HeaderComponent},
   { path: '', component: SidebarComponent},
   { path: 'dynamic-listing', component: DynamicListingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
