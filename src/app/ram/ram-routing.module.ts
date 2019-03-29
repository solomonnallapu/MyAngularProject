import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RamComponent } from './ram.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

const routes: Routes = [
  {
    path: '',
    component: RamComponent,
    children: [
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'test2',
        component: Test2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RamRoutingModule { }

