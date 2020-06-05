import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prize-card',
  templateUrl: './prize-card.component.html',
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
