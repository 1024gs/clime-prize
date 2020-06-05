import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeCardComponent } from './prize-card.component';

describe('PrizeCardComponent', () => {
  let component: PrizeCardComponent;
  let fixture: ComponentFixture<PrizeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrizeCardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeCardComponent);
    component = fixture.componentInstance;
    component.prize = {
      amount: 50,
      prize: 'Free Spins',
      game: 'Gamix',
      countdown: 25,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#claim() sets the prize claimed prop to true', () => {
    expect(component.prize.claimed).not.toBeTruthy();
    component.claim();
    expect(component.prize.claimed).toBe(true);
  });

  it('#onTimeout() sets the prize countdown prop to 0', () => {
    expect(component.prize.countdown).not.toBe(0);
    component.onTimeout();
    expect(component.prize.countdown).toBe(0);
  });
});
