import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopOpComponent } from './pop-op.component';

describe('PopOpComponent', () => {
  let component: PopOpComponent;
  let fixture: ComponentFixture<PopOpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopOpComponent]
    });
    fixture = TestBed.createComponent(PopOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
