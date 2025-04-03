import { Routes } from '@angular/router';
import { ListagemDesaparecidosComponent } from './pages/listagem-desaparecidos/listagem-desaparecidos.component';
import { DetalhamentoDesaparecidoComponent } from './pages/detalhamento-desaparecido/detalhamento-desaparecido.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'listagem-desaparecidos', pathMatch: 'full'
    },
    {
        path: 'listagem-desaparecidos', component: ListagemDesaparecidosComponent, 
    },
    {
        path: 'detalhamento-desaparecido', component: DetalhamentoDesaparecidoComponent
    },
    {
        path: 'detalhamento-desaparecido/:id', component: DetalhamentoDesaparecidoComponent
    }
];
