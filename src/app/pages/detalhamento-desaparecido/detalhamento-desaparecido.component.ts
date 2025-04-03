import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoasService } from '../../shared/service/pessoas.service';
import { Pessoa } from '../../shared/interface/pessoa.interface';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from '../../shared/service/message.service';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SexoEnum } from '../../shared/enum/sexoEnum';
import { DropdownModule } from 'primeng/dropdown';
import { SituacaoVitalEnum } from '../../shared/enum/situacaoVitalEnum';
import { StatusEnum } from '../../shared/enum/statusEnum';
import { PanelModule } from 'primeng/panel';
import { converterDataISOParaData, formatarData } from '../../shared/util/formataData';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { NavegacaoUtils } from '../../shared/util/redireciona';
import { AccordionModule } from 'primeng/accordion';
import { NovaInformacao } from '../../shared/interface/nova-informacao.interface';
import { OcorrenciasService } from '../../shared/service/ocorrencias.service';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

import { ZipdownloadService } from '../../shared/service/zipdownload.service';
@Component({
  selector: 'app-detalhamento-desaparecido',
  standalone: true,
  imports: [HttpClientModule, NgIf, ReactiveFormsModule, DropdownModule, PanelModule,
    InputTextareaModule, TooltipModule, AccordionModule, TableModule, PaginatorModule],
  providers: [PessoasService, OcorrenciasService],
  templateUrl: './detalhamento-desaparecido.component.html',
  styleUrl: './detalhamento-desaparecido.component.scss'
})
export class DetalhamentoDesaparecidoComponent {

  pessoa!: Pessoa;
  form!: FormGroup;
  sexo = SexoEnum;
  situacaoVital = SituacaoVitalEnum;
  status = StatusEnum;
  urlCartaz!: string;
  ultimasInformacoes: NovaInformacao[] = [];

  constructor(
    private route: ActivatedRoute,
    private pessoasService: PessoasService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private router: Router,
    private ocorrenciaService: OcorrenciasService,
    private zipService: ZipdownloadService
  ) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.carregaPessoa(id)
    });
    this.form = this.formBuilder.group({
      nome: [''],
      idade: [''],
      sexo: [''],
      cod: [''],
      situacaoVital: [''],
      dataDesaparecimento: [''],
      localDesaparecimento: [''],
      vestimenta: [''],
      informacao: [''],
      dataLocalizacao: [''],
      dataAvistamento: [''],
      descricao: [''],
      novaInformacao: ['']
    })
  }

  carregaPessoa(individuo: number) {
    this.pessoasService.carregaPessoa(individuo).subscribe({
      next: (dado) => {
        this.buscaInformacoesDesaparecido(dado.ultimaOcorrencia.ocoId)
        dado.ultimaOcorrencia.listaCartaz.forEach(item => {
          this.urlCartaz = item.urlCartaz;
        })
        this.pessoa = dado;
        this.form.patchValue({
          nome: dado.nome,
          idade: dado.idade,
          sexo: dado.sexo,
          cod: dado.ultimaOcorrencia.ocoId,
          situacaoVital: dado.ultimaOcorrencia.dataLocalizacao && !dado.ultimaOcorrencia.encontradoVivo ? dado.ultimaOcorrencia.encontradoVivo : dado.vivo,
          dataDesaparecimento: converterDataISOParaData(dado.ultimaOcorrencia.dtDesaparecimento),
          localDesaparecimento: dado.ultimaOcorrencia.localDesaparecimentoConcat,
          vestimenta: dado.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.vestimentasDesaparecido,
          informacao: dado.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.informacao,
          dataLocalizacao: dado.ultimaOcorrencia.dataLocalizacao
        })
      },
      error: (e) => {
        this.messageService.error(e?.error?.detail)
      }
    })
  }

  converterData(data: string) {
    return formatarData(data)
  }

  adicionaNovaInformacao() {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    const file = fileInput.files?.[0]; 
    this.ocorrenciaService.novasInformacoes(
      this.pessoa.ultimaOcorrencia.ocoId,
      this.form.value.novaInformacao,
      this.form.value.descricao,
      this.form.value.dataAvistamento,
      file
    ).subscribe({
      next: (res) => {
        this.messageService.success('Informação adicionada com sucesso!');
        this.limpaFormularioInformacao();
        this.buscaInformacoesDesaparecido(this.pessoa.ultimaOcorrencia.ocoId)
      },
      error: (err) => {
        this.messageService.error(err?.error?.detail)
      }
    });
  }

  limpaFormularioInformacao() {
    this.form.patchValue({
      novaInformacao: [''],
      descricao: [''],
      dataAvistamento: ['']
    })
  }

  verificaData($event: any) {
    console.log($event);
    
  } 

  buscaInformacoesDesaparecido(ocorrenciaId: number) {
    this.ocorrenciaService.buscaInformacoesDesaparecidos(ocorrenciaId).subscribe({
      next: (dado) => {
        dado.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
        this.ultimasInformacoes = dado;        
      }
    })
  }

  downloadAnexos(anexos: any, id: number, data: string) {
    this.zipService.baixarECompactarArquivos(anexos, this.pessoa.ultimaOcorrencia.ocoId + '_' + id + '_' + this.pessoa.nome + '_' + data + '.zip')
  }

  abrirCartaz(cartaz: string) {
    window.open(cartaz, '_blank');
  }

  voltar() {
    NavegacaoUtils.redireciona(this.router, 'listagem-desaparecidos')
  }

}
