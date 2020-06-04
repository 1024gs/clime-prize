import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrizeCardComponent } from './components/prize-card/prize-card.component';
import { CountdownComponent } from './components/countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    PrizeCardComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
