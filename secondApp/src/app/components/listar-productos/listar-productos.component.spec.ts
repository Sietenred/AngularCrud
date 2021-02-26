import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductosComponent } from './listar-productos.component';

describe('ListarProductosComponent', () => {
  let component: ListarProductosComponent;
  let fixture: ComponentFixture<ListarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
