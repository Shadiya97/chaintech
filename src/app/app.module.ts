import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlighterDirective } from './shared/directives/highlighter.directive';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FullnamePipe } from './shared/pipes/fullname.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortDirective } from './shared/directives/sort.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirective,
    EmployeeListComponent,
    FullnamePipe,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [FullnamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
