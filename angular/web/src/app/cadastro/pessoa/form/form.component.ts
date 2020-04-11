import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { gerarFormulario } from '../../../comum/ferramenta/ferramenta';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  isEnviado = false;
  entidade: Pessoa;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.entidade = new Pessoa();
    this.entidade.nome = 'Teste de Nome';
    this.form = this.criarFormulario(this.entidade);
  }

  criarFormulario(entidade) {
    let result = this.formBuilder.group(gerarFormulario(entidade));
    return result;
  }

}
