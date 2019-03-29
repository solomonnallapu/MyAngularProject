import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RamRoutingModule } from './ram-routing.module';
import { RamComponent } from './ram.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [RamComponent, TestComponent, Test2Component],
  imports: [
    CommonModule,
    RamRoutingModule
  ]
})
export class RamModule { }
