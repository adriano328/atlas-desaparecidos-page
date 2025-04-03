import { Component, OnInit } from '@angular/core';
import { pessoas } from '../../shared/base/pessoas';
import { Pessoa } from '../../shared/interface/pessoa.interface';
import { CardModule } from 'primeng/card';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SexoEnum } from '../../shared/enum/sexoEnum';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listagem-desaparecidos',
  standalone: true,
  imports: [CardModule, NgFor, NgIf, PaginatorModule, IconFieldModule, InputTextModule,
    ReactiveFormsModule, InputIconModule, CommonModule],
  templateUrl: './listagem-desaparecidos.component.html',
  styleUrl: './listagem-desaparecidos.component.scss'
})
export class ListagemDesaparecidosComponent implements OnInit {

  pessoas: Pessoa[] = pessoas;
  pessoasPaginadas: Pessoa[] = [];
  pessoasFiltradas: Pessoa[] = [];
  first: number = 1;
  rows: number = 10;
  sexo = SexoEnum;
  form!: FormGroup;
  totalElements!: number;

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.BuscaPorFiltros();
    });

    this.BuscaPorFiltros();
  }

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nome: [''],
      sexo: [''],
      idadeMinima: [''],
      idadeMaxima: ['']
    })
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 1;
    this.rows = event.rows ?? 10;
    this.atualizarPagina();
  }

  trackById(index: number, item: Pessoa) {
    return item.id; 
  }

  BuscaPorFiltros() {
    this.totalElements = this.pessoas.length;

    const { nome, sexo, idadeMinima, idadeMaxima } = this.form.value;

    this.pessoasFiltradas = this.pessoas.filter(pessoa => {
      const nomeMatch = nome ? pessoa.nome.toLowerCase().includes(nome.toLowerCase()) : true;
      const sexoMatch = sexo ? pessoa.sexo === sexo : true;
      const idadeMatch =
        (!idadeMinima || pessoa.idade >= idadeMinima) &&
        (!idadeMaxima || pessoa.idade <= idadeMaxima);

      return nomeMatch && sexoMatch && idadeMatch;
    });
    this.totalElements = this.pessoasFiltradas.length;
    this.atualizarPagina();
  }

  atualizarPagina() {
    const start = this.first;
    const end = this.first + this.rows;

    this.pessoasPaginadas = this.pessoasFiltradas.slice(start, end);
    this.totalElements = this.pessoasPaginadas.length;

  }

}
