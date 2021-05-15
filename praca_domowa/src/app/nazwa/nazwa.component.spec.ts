import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballClub } from './nazwa.component';

describe('NazwaComponent', () => {
  let component: FootballClub;
  let fixture: ComponentFixture<FootballClub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballClub ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballClub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
