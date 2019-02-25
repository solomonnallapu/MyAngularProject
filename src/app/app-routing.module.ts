import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
   { path: 'component1', component: Component1Component},
   { path: 'header', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
