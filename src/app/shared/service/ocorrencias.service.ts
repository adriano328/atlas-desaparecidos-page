import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/enviroments';
import { NovaInformacao } from '../interface/nova-informacao.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciasService {

  constructor(
    private http: HttpClient
  ) { }

  novasInformacoes(
    ocoId: string,
    informacao: string,
    descricao: string,
    data: string,
    files?: File[]
  ) {
    const params = new HttpParams()
      .set('ocoId', ocoId)
      .set('informacao', encodeURIComponent(informacao))
      .set('descricao', encodeURIComponent(descricao))
      .set('data', data);
  
    const formData = new FormData();
  
    if (files && files.length > 0) {
      files.forEach((file) => {
        formData.append('files', file, file.name);
      });
    }
  
    return this.http.post(`${environment.url}/ocorrencias/informacoes-desaparecido`, formData, { params });
  }

  buscaInformacoesDesaparecidos(ocorrenciaId: number) {
    return this.http.get<NovaInformacao[]>(`${environment.url}/ocorrencias/informacoes-desaparecido`, {
      params: new HttpParams().set('ocorrenciaId', ocorrenciaId)
    })
  }

}
