import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Component1Component } from "./component1/component1.component";
import { HeaderComponent } from "./header/header.component";
import { FormsModule } from "@angular/forms";

import { DynamicListingComponent } from "./dynamic-listing/dynamic-listing.component";
import { LayoutModule } from "@angular/cdk/layout";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { DashboardModule } from "./dashboard/dashboard.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BusinessModule } from "./business/business.module";
import { RamModule } from "./ram/ram.module";
import { ToDoComponent } from './to-do/to-do.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { HttpClientModule } from '@angular/common/http';
import { FreeApiService } from './services/free-api.service';
import { ApiGetParamComponent } from './api-get-param/api-get-param.component';
import { EventPracticeComponent } from './event-practice/event-practice.component';
import { ChildComponent } from './event-practice/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    HeaderComponent,
    DynamicListingComponent,
    SidebarComponent,
    ToDoComponent,
    ApiCallsComponent,
    ApiGetParamComponent,
    EventPracticeComponent,
    ChildComponent
    // BusinessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BusinessModule,
    RamModule,
    LayoutModule,
    DashboardModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [FreeApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
