import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarersPageComponent } from './carers-page.component';

describe('CarersPageComponent', () => {
  let component: CarersPageComponent;
  let fixture: ComponentFixture<CarersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarersPageComponent]
    });
    fixture = TestBed.createComponent(CarersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
