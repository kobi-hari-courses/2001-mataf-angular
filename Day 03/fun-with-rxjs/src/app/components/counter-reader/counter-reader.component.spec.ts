import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterReaderComponent } from './counter-reader.component';

describe('CounterReaderComponent', () => {
  let component: CounterReaderComponent;
  let fixture: ComponentFixture<CounterReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
