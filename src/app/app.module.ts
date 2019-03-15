import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DynamicClassesComponent } from './dynamic-classes/dynamic-classes.component';
import { DynamicListingComponent } from './dynamic-listing/dynamic-listing.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';




@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    HeaderComponent,
    SidebarComponent,
    DynamicClassesComponent,
    DynamicListingComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    NgMultiSelectDropDownModule.forRoot(),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
