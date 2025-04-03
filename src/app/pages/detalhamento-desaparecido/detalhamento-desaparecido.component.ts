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
import { converterDataISOParaData } from '../../shared/util/formataData';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TooltipModule } from 'primeng/tooltip';
import { NavegacaoUtils } from '../../shared/util/redireciona';

@Component({
  selector: 'app-detalhamento-desaparecido',
  standalone: true,
  imports: [HttpClientModule, NgIf, ReactiveFormsModule, DropdownModule, PanelModule, InputTextareaModule, TooltipModule],
  providers: [PessoasService],
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

  constructor(
    private route: ActivatedRoute,
    private pessoasService: PessoasService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private router: Router
  
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
      dataLocalizacao: ['']
    })
  }

  carregaPessoa(individuo: number) {
    this.pessoasService.carregaPessoa(individuo).subscribe({
      next: (dado) => {
        dado.ultimaOcorrencia.listaCartaz.forEach(item => {
          this.urlCartaz = item.urlCartaz;
        })
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
        this.pessoa = dado;
      },
      error: (e) => {
        this.messageService.error(e?.error?.detail)
      }
    })
  }

  abrirCartaz(cartaz: string) {
    window.open(cartaz, '_blank');
  }

  voltar() {
    NavegacaoUtils.redireciona(this.router, 'listagem-desaparecidos')
  }

}
