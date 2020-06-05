import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrizeCardComponent } from './components/prize-card/prize-card.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe';
import { HttpClientModule } from '@angular/common/http';
import { IsLoadingComponent } from './components/is-loading/is-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    PrizeCardComponent,
    CountdownComponent,
    SecondsToTimePipe,
    IsLoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
