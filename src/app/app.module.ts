import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlighterDirective } from './directives/highlighter.directive';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FullnamePipe } from './fullname.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortDirective } from './directives/sort.directive';
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
