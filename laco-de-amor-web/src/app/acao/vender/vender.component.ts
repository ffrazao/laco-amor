import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.scss']
})
export class VenderComponent implements OnInit {

  formulario = {
    nome: 'Vender Produtos',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
