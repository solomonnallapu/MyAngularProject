import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { FirmsComponent } from './firms/firms.component';




@NgModule({
  declarations: [
    FirmsComponent
  ]
  ,
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})

export class BusinessModule {

 
 }