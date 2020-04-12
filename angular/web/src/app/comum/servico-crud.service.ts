import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { findIndexById } from '../comum/ferramenta/ferramenta';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class ServicoCrudService<E, F> {

  private _http: HttpClient;
  private _lista: E[] = [];
  private _form: E;
  private _filtro: F;

  constructor(private _funcionalidade: string) { }

  public get funcionalidade(): string {
    return this._funcionalidade;
  }

  public get lista(): E[] {
    return this._lista;
  }

  public get form(): E {
    return this._form;
  }

  public get filtro(): F {
    return this._filtro;
  }

  public set lista(valor) {
    this._lista = valor;
  }

  public set form(valor) {
    this._form = valor;
  }

  public set filtro(valor) {
    this._filtro = valor;
  }

  public create(entidade: E) {
    // environment.API_URL;
    this.lista.push(entidade);
  }

  public restore(id): E {
    let result: E = null;

    let idx = findIndexById(this.lista, id);
    if (idx) {
      result = this.lista[idx];
    }

    return result;
  }

  public update(id, entidade: E): void {
    let result: E = null;

    let idx = findIndexById(this.lista, id);
    if (idx) {
      this.lista[idx] = entidade;
    } else {
      throw new Error('Registro não encontrado ' + id);
    }
  }

  public delete(id) {
    let result: E = null;
    let idx = findIndexById(this.lista, id);
    if (idx) {
      this.lista.splice(idx, 1);
    } else {
      throw new Error('Registro não encontrado ' + id);
    }
  }

  public fitrar() {
    if (!this.filtro || !this.lista || !this.lista.length) {
      return [];
    }
    let camposFiltro = Object.getOwnPropertyNames(this.filtro);
    let camposRegistro = Object.getOwnPropertyNames(this.lista[0]);

    return this.lista.filter(reg => {

      let encontrado = false;
      for (let j = 0; j < camposRegistro.length; j++) {
        for (let i = 0; i < camposFiltro.length; i++) {
          if (this.filtro[camposFiltro[j]]
            && reg[camposRegistro[i]]
            && camposFiltro[j] === camposRegistro[i]) {
              encontrado = this.filtro[camposFiltro[j]] === reg[camposRegistro[i]];
              break;
          }
        }
        return encontrado;
      }
    });
  }

}
