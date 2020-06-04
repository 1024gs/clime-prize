import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prize-card',
  template: `<div class="card text-center">
    <div class="card-body">
      <h5 class="card-title">
        50 Free Spins <br />
        on Gemix
      </h5>
      <p class="card-text">00:00</p>
      <button type="button" class="btn btn-primary">Claim now</button>
    </div>
  </div>`,
  styleUrls: ['./prize-card.component.sass'],
})
export class PrizeCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
