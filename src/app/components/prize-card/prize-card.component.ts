import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-prize-card',
  templateUrl: './prize-card.component.html',
  styleUrls: ['./prize-card.component.sass'],
})
export class PrizeCardComponent {
  @Input() prize: {
    amount: number;
    prize: string;
    game: string;
    countdown: number;
    claimed?: boolean;
  };

  claim() {
    this.prize.claimed = true;
  }

  onTimeout() {
    this.prize.countdown = 0;
  }
}
