import { Component, OnInit, OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-countdown',
  template: `<span>{{ seconds | secondsToTime }}</span>`,
  styleUrls: ['./countdown.component.sass'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() seconds: number;
  @Output() done = new EventEmitter();

  subscription: Subscription;

  ngOnInit() {
    this.subscription = interval(1000)
      .pipe(take(this.seconds))
      .subscribe(
        () => {--this.seconds; },
        undefined,
        () => {this.done.emit(); }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
