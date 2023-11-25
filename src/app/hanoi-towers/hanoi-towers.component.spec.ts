import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanoiTowersComponent } from './hanoi-towers.component';

describe('HanoiTowersComponent', () => {
  let component: HanoiTowersComponent;
  let fixture: ComponentFixture<HanoiTowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HanoiTowersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HanoiTowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
