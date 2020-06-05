import { Component, OnInit } from '@angular/core';
import { PrizesService } from './services/prizes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'claim-prize';
  prize: object;
  isLoading: boolean;

  constructor(private prizesService: PrizesService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.prizesService
      .getOne('50-free-spins')
      .subscribe((response) => {this.prize = response; })
      .add(() => {this.isLoading = false; });
  }
}
