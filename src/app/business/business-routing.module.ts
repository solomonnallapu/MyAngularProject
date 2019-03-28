import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business.component';
import { FirmsComponent } from './firms/firms.component';



console.log('You Reached Business');
const routes: Routes = [
    // {path : '', redirectTo : 'business', pathMatch : 'full'},
  {path : 'business', component : BusinessComponent },
    {path : 'firms', component : FirmsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }