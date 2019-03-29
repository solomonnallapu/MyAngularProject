import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { FirmsComponent } from './firms/firms.component';
import { BusinessComponent } from './business.component'

@NgModule({
  declarations: [
    FirmsComponent,
    BusinessComponent
  ]
  ,
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})

export class BusinessModule {

 
 }