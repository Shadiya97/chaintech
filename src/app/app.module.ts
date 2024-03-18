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
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HighlighterDirective,
    EmployeeListComponent,
    FullnamePipe,
    SortDirective,
    EmployeeSearchComponent,
    EmployeeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [FullnamePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
