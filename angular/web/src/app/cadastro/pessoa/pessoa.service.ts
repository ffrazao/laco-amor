import { Injectable } from '@angular/core';
import { Pessoa } from './pessoa';
import { ServicoCrudService } from 'src/app/comum/servico-crud.service';
import { PessoaFiltro } from './pessoa-filtro';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends ServicoCrudService<Pessoa, PessoaFiltro> {

  constructor() {
    super('pessoa');
  }

}
