import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BorderRadiusModule } from './border-radius/border-radius.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BorderRadiusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
