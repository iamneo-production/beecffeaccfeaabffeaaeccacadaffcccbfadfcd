import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CurrconvPipe} from './currency.pipe';
import {RemoveCommaPipe} from './removecomma.pipe';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CurrconvPipe,
    RemoveCommaPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
