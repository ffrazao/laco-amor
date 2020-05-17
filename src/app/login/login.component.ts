import { LoginFormService } from './login-form.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Login } from '../comum/modelo/login';
import { LoginService } from './login.service';
import { MensagemService } from '../comum/servico/mensagem/mensagem.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public frm: FormGroup;

  public isEnviado = false;
  public entidade: Login;

  constructor(
    private _service: LoginService,
    private _formService: LoginFormService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _mensagem: MensagemService,
    ) { 

    }

  ngOnInit(): void {
    this.frm = this._formService.criarFormulario(new Login());
  }

  public enviar(event) {
    event.preventDefault();
    this.isEnviado = true;

    if (this.frm.invalid) {
      const msg = 'Dados inválidos!';
      this._mensagem.erro(msg);
      throw new Error(msg);
    }

    const reg = this.frm.value as Login;
    this._service.login(reg.login, reg.senha).subscribe((resp) => {
      console.log(resp);
      this._mensagem.sucesso('Login Efetuado!');
      this._router.navigate(['/']);
    }, (err) => {
      let msg = 'Erro no processo de login';
      if (err.error.error_description === 'Bad credentials') {
        msg = 'Credenciais inválidas!';
      }
      console.log(msg, err);
      this._mensagem.erro(msg);
    });
  }

}
