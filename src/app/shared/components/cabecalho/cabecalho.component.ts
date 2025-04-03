import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavegacaoUtils } from '../../util/redireciona';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.scss'
})
export class CabecalhoComponent {

  constructor(
    private router: Router
  ) {}

  redireciona() {
    NavegacaoUtils.redireciona(this.router, 'listagem-desaparecidos');
  }

}
