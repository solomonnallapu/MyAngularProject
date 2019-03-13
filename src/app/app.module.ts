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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule} from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    HeaderComponent,
    SidebarComponent,
    DynamicClassesComponent,
    DynamicListingComponent,
    // BrowserAnimationsModule,
    // NoopAnimationsModule,
    SidenavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
      NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
