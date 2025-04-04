import { Router } from "@angular/router";

export class NavegacaoUtils {
    static redireciona(router: Router, rota: string, parametro?: number) {
        if (parametro !== undefined && parametro !== null) {
            router.navigate([`${rota}/${parametro}`]);
        } else {
            router.navigate([rota]);
        }
    }

    static abrirCartaz(link: string) {
        window.open(link, '_blank');
    }
}