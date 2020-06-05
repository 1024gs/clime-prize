import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prize-card',
  template: `<div
    class="card text-center"
    [ngClass]="{ claimed: prize.claimed }"
  >
    <div class="card-body">
      <h5 class="card-title">
        <span *ngIf="!prize.claimed"
          >{{ prize.amount }} {{ prize.prize }} <br />
          on {{ prize.game }}</span
        >
        <span *ngIf="prize.claimed"
          >You've {{ prize.amount }} {{ prize.prize }} to use now</span
        >
      </h5>
      <p class="card-text" *ngIf="!prize.claimed">
        <app-countdown
          [seconds]="prize.countdown"
          (complete)="onTimeout()"
        ></app-countdown>
      </p>
      <button
        type="button"
        class="btn btn-primary"
        [disabled]="prize.countdown === 0 || prize.claimed"
        (click)="claim()"
      >
        <span *ngIf="!prize.claimed">Claim now</span>
        <img *ngIf="prize.claimed" src="assets/icon-tick.svg" alt="tick" />
      </button>
    </div>
  </div>`,
  styleUrls: ['./prize-card.component.sass'],
})
export class PrizeCardComponent implements OnInit {
  prize = {
    amount: 50,
    prize: 'Free Spins',
    game: 'Gamix',
    countdown: 5,
    claimed: false,
  };

  constructor() {}

  ngOnInit(): void {}

  claim() {
    this.prize.claimed = true;
  }

  onTimeout() {
    this.prize.countdown = 0;
  }
}
