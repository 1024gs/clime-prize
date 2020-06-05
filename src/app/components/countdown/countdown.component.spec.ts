import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  discardPeriodicTasks,
  fakeAsync,
} from '@angular/core/testing';
import { SecondsToTimePipe } from '../../pipes/seconds-to-time.pipe';

import { CountdownComponent } from './countdown.component';

describe('CountdownComponent', () => {
  let component: CountdownComponent;
  let fixture: ComponentFixture<CountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CountdownComponent, SecondsToTimePipe],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
    component.seconds = 25;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should countdown', fakeAsync(() => {
    component.seconds = 5;

    component.ngOnInit();
    tick(1000);
    expect(component.seconds).toEqual(4);

    tick(1000);
    expect(component.seconds).toEqual(3);

    discardPeriodicTasks();
  }));

  it('should stop countdown when reacing 0', fakeAsync(() => {
    component.seconds = 1;

    component.ngOnInit();
    tick(2000);

    expect(component.seconds).toEqual(0);
    discardPeriodicTasks();
  }));
});
