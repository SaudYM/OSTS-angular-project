import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSTComponent } from './OST.component';

describe('OSTComponent', () => {
  let component: OSTComponent;
  let fixture: ComponentFixture<OSTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OSTComponent]
    });
    fixture = TestBed.createComponent(OSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
