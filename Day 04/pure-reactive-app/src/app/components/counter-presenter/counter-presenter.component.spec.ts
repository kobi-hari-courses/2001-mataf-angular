import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPresenterComponent } from './counter-presenter.component';

describe('CounterPresenterComponent', () => {
  let component: CounterPresenterComponent;
  let fixture: ComponentFixture<CounterPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
