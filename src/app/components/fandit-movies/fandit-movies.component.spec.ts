import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanditMoviesComponent } from './fandit-movies.component';

describe('FanditMoviesComponent', () => {
  let component: FanditMoviesComponent;
  let fixture: ComponentFixture<FanditMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanditMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanditMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
