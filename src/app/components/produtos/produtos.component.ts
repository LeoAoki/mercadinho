import { Component, OnInit } from '@angular/core';
import { PRODUTOS } from 'src/app/mocks/mock-produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos = PRODUTOS;

  constructor() { }

  ngOnInit(): void {
  }

}
