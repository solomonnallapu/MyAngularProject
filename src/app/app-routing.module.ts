import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Component1Component } from "./component1/component1.component";
import { HeaderComponent } from "./header/header.component";
import { DynamicListingComponent } from "./dynamic-listing/dynamic-listing.component";
import { ToDoComponent } from './to-do/to-do.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { ApiGetParamComponent } from './api-get-param/api-get-param.component';
import { EventPracticeComponent } from './event-practice/event-practice.component';
const routes: Routes = [
  { path: "", redirectTo: "dynamic-listing", pathMatch: "full" },
  { path: "dynamic-listing", component: DynamicListingComponent },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule"
  },
  {
    path: "business",
    loadChildren: "./business/business.module#BusinessModule"
  },
  { path: "books", loadChildren: "./books/books.module#BooksModule" },
  { path: "component1", component: Component1Component },
  { path: "header", component: HeaderComponent },
  { path: "ram", loadChildren: "./ram/ram.module#RamModule" },
  { path: "to-do", component: ToDoComponent },
  { path: "api", component: ApiCallsComponent },
  { path: "api-gp", component: ApiGetParamComponent },
  { path: "event", component: EventPracticeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
