import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDesaparecidosComponent } from './listagem-desaparecidos.component';

describe('ListagemDesaparecidosComponent', () => {
  let component: ListagemDesaparecidosComponent;
  let fixture: ComponentFixture<ListagemDesaparecidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemDesaparecidosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemDesaparecidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
