import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkcarComponent } from './parkcar.component';

describe('ParkcarComponent', () => {
  let component: ParkcarComponent;
  let fixture: ComponentFixture<ParkcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkcarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
