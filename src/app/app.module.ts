import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrizeCardComponent } from './components/prize-card/prize-card.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrizeCardComponent,
    CountdownComponent,
    SecondsToTimePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
