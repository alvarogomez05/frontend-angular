import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCardComponent } from './productos-card.component';

describe('ProductosCardComponent', () => {
  let component: ProductosCardComponent;
  let fixture: ComponentFixture<ProductosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosCardComponent]
    });
    fixture = TestBed.createComponent(ProductosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
