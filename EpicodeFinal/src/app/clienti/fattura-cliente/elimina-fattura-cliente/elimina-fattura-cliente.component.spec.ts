import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaFatturaClienteComponent } from './elimina-fattura-cliente.component';

describe('EliminaFatturaClienteComponent', () => {
  let component: EliminaFatturaClienteComponent;
  let fixture: ComponentFixture<EliminaFatturaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminaFatturaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminaFatturaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
