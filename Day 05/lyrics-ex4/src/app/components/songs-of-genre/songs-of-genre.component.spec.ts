import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsOfGenreComponent } from './songs-of-genre.component';

describe('SongsOfGenreComponent', () => {
  let component: SongsOfGenreComponent;
  let fixture: ComponentFixture<SongsOfGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsOfGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsOfGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
