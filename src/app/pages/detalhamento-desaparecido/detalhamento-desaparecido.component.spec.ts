import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoDesaparecidoComponent } from './detalhamento-desaparecido.component';

describe('DetalhamentoDesaparecidoComponent', () => {
  let component: DetalhamentoDesaparecidoComponent;
  let fixture: ComponentFixture<DetalhamentoDesaparecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhamentoDesaparecidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhamentoDesaparecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
