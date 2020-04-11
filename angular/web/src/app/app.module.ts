import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuModule } from './comum/menu/menu.module';
import { RodapeModule } from './comum/rodape/rodape.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    RodapeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
