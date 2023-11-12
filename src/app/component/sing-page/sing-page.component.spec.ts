import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingPageComponent } from './sing-page.component';

describe('SingPageComponent', () => {
  let component: SingPageComponent;
  let fixture: ComponentFixture<SingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingPageComponent]
    });
    fixture = TestBed.createComponent(SingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
