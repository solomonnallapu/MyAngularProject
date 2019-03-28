import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


console.log('You Reached Dashboard');
const routes: Routes = [
  // {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
