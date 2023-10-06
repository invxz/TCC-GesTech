import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  public alertButtons = [
    {
      text: 'Cancelar',
      handler: () => {
        console.log('usuário cancelou')
      }
    },
    {
      text: 'Sair',
      handler: () => {
        window.location.href = "../home"
      }

    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
