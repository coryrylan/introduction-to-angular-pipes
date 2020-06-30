import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EllipsisPipe } from './ellipsis.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EllipsisPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
