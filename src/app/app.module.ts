import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogsModule } from '@progress/kendo-angular-dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	DialogsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
