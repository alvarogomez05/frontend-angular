import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirateComponent } from './inspirate.component';

describe('InspirateComponent', () => {
  let component: InspirateComponent;
  let fixture: ComponentFixture<InspirateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InspirateComponent]
    });
    fixture = TestBed.createComponent(InspirateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
