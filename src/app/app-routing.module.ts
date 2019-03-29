import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Component1Component } from "./component1/component1.component";
import { HeaderComponent } from "./header/header.component";
import { DynamicListingComponent } from "./dynamic-listing/dynamic-listing.component";
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
  { path: "ram", loadChildren: "./ram/ram.module#RamModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
