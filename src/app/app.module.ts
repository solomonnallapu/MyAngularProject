import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { DynamicClassesComponent } from './dynamic-classes/dynamic-classes.component';
import { DynamicListingComponent } from './dynamic-listing/dynamic-listing.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { DashboardModule } from './dashboard/dashboard.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BusinessComponent } from './business/business.component';
import { FirmsComponent } from './business/firms/firms.component'
import { BusinessModule } from './business/business.module';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    HeaderComponent,
    DynamicClassesComponent,
    DynamicListingComponent,
    SidebarComponent,
    BusinessComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BusinessModule,
    LayoutModule,
    DashboardModule,
    NgMultiSelectDropDownModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
