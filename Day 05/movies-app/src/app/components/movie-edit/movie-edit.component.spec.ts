import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEditComponent } from './movie-edit.component';

describe('MovieEditComponent', () => {
  let component: MovieEditComponent;
  let fixture: ComponentFixture<MovieEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
