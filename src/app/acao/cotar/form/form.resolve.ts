import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Cotar } from '../../../comum/entidade/modelo/cotar';
import { UnidadeMedidaService } from '../../../cadastro/unidade-medida/unidade-medida.service';
import { CotarService } from '../cotar.service';

@Injectable()
export class FormResolve implements Resolve<any> {

    constructor(
        private servico: CotarService,
        private unidadeMedidaService: UnidadeMedidaService,
    ) {
    }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): any | Observable<any> | Promise<any> {
        let entidade = this.servico.restore(route.params['id']);
        return {
            principal: entidade,
            acao: 'Visualizar',
            apoio: [this.unidadeMedidaService.lista],
        };
    }

}