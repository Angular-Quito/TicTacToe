import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { TableroComponent } from './tablero/tablero.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
