import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosInfoComponent } from './productos-info.component';

describe('ProductosInfoComponent', () => {
  let component: ProductosInfoComponent;
  let fixture: ComponentFixture<ProductosInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosInfoComponent]
    });
    fixture = TestBed.createComponent(ProductosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
