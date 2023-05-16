import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OSTsComponent } from './OSTs.component';

describe('OSTComponent', () => {
  let component: OSTsComponent;
  let fixture: ComponentFixture<OSTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OSTsComponent],
    });
    fixture = TestBed.createComponent(OSTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
