import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './shared/components/cabecalho/cabecalho.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';
import { LoadingService } from './shared/service/loading.service';
import { LoadingComponent } from './shared/interceptor/component/loading/loading.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, RouterOutlet, CabecalhoComponent, RodapeComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'consulta-desaparecidos';

  isLoading: boolean = false;

  constructor(
    private loadingService: LoadingService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit(): void {
    this.loadingService.isLoading$.subscribe((isLoading) => {
      console.log(isLoading);
      
      this.isLoading = isLoading;
      this.cdr.detectChanges();
    });
  }
}
