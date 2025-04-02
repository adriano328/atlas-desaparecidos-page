import { Component, OnInit } from '@angular/core';
import { pessoas } from '../../shared/base/pessoas';
import { Pessoa } from '../../shared/interface/pessoa.interface';
import { CardModule } from 'primeng/card';
import { NgFor, NgIf } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-listagem-desaparecidos',
  standalone: true,
  imports: [CardModule, NgFor, NgIf, PaginatorModule],
  templateUrl: './listagem-desaparecidos.component.html',
  styleUrl: './listagem-desaparecidos.component.scss'
})
export class ListagemDesaparecidosComponent implements OnInit {

  pessoas: Pessoa[] = pessoas;
  pessoasPaginadas: Pessoa[] = [];
  first: number = 1;
  rows: number = 10;

  ngOnInit(): void {
    this.atualizarPagina()
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 1;
    this.rows = event.rows ?? 10;
    this.atualizarPagina();
  }

  atualizarPagina() {
    const start = this.first;
    const end = this.first + this.rows;
    this.pessoasPaginadas = this.pessoas.slice(start, end);
  }

}
