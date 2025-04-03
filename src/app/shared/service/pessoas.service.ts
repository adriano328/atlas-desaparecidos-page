import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paginado } from '../interface/page.interface';
import { Pessoa } from '../interface/pessoa.interface';
import { environment } from '../../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(
    private http: HttpClient
  ) { }

  carregaPessoas(nome?: string, faixaIdadeInicial?: number, faixaIdadeFinal?: number, sexo?: string, status?: string, pagina?: number, porPagina?: number,) {
    return this.http.get<Paginado<Pessoa>>(`${environment.url}/pessoas/aberto/filtro`, {
      params: new HttpParams().set('nome', nome || '').set('faixaIdadeInicial', faixaIdadeInicial || '')
      .set('faixaIdadeFinal', faixaIdadeFinal || '').set('sexo', sexo || '').set('status', status || '')
      .set('pagina', pagina || 0).set('porPagina', porPagina || 10)
    })
  }

}
