import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {Routes, RouterModule} from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";


import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EventsViewComponent } from './events/events-view.component';
import {EventsService} from './BLL/events.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'events', component: EventsComponent}
  ];
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    EventsComponent,
    EventsViewComponent,
    EventsService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
