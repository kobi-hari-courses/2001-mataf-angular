import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewerComponent } from './list-viewer.component';

describe('ListViewerComponent', () => {
  let component: ListViewerComponent;
  let fixture: ComponentFixture<ListViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
