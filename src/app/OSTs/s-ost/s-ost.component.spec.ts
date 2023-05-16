import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOSTComponent } from './s-ost.component';

describe('SOSTComponent', () => {
  let component: SOSTComponent;
  let fixture: ComponentFixture<SOSTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SOSTComponent]
    });
    fixture = TestBed.createComponent(SOSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
