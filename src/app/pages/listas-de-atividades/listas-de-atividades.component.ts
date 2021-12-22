import { Component, OnInit } from '@angular/core';
import { MembroValor } from 'src/app/models/membros';


@Component({
  selector: 'app-listas-de-atividades',
  templateUrl: './listas-de-atividades.component.html',
  styleUrls: ['./listas-de-atividades.component.css']
})
export class ListasDeAtividadesComponent implements OnInit{

  listMembros: MembroValor[];
  membroEscolhido: MembroValor;

  ngOnInit(): void {
    this.listMembros = this.preencheListaMembros();
    this.membroEscolhido = this.listMembros[0];
  }

  private preencheListaMembros(): MembroValor[]{
    return [
      {
        foto: 'url',
        nome: 'Ísis Lima',
        valorMesada: 1000.00,
        valorDescontos: 15.00,
        valorTotal: 285.00,
        atividades:[
          {
            descricao: 'tirar lixo',
            valor: 15.00,
            status: false,
          }, 
          {
            descricao: 'arrumar a cama',
            valor: 10.00,
            status: true,
          }
        ]
      },
      {
        foto: 'url',
        nome: 'Alice Lima',
        valorMesada: 500.50,
        valorDescontos: 20.00,
        valorTotal: 285.00,
        atividades:[
          {
            descricao: 'guardar sapatos',
            valor: 15.00,
            status: false,
          }, 
          {
            descricao: 'arrumar a cama de novo',
            valor: 30.00,
            status: true,
          }
        ]
      },
      {
        foto: 'url',
        nome: 'Alice Lima',
        valorMesada: 500.50,
        valorDescontos: 20.00,
        valorTotal: 285.00,
        atividades:[
          {
            descricao: 'guardar sapatos',
            valor: 15.00,
            status: false,
          }, 
          {
            descricao: 'arrumar a cama de novo',
            valor: 30.00,
            status: true,
          }
        ]
      },
      {
        foto: 'url',
        nome: 'Alice Lima',
        valorMesada: 500.50,
        valorDescontos: 20.00,
        valorTotal: 285.00,
        atividades:[
          {
            descricao: 'guardar sapatos',
            valor: 15.00,
            status: false,
          }, 
          {
            descricao: 'arrumar a cama de novo',
            valor: 30.00,
            status: true,
          }
        ]
      },
      {
        foto: 'url',
        nome: 'Alice Lima',
        valorMesada: 500.50,
        valorDescontos: 20.00,
        valorTotal: 285.00,
        atividades:[
          {
            descricao: 'guardar sapatos',
            valor: 15.00,
            status: false,
          }, 
          {
            descricao: 'arrumar a cama de novo',
            valor: 30.00,
            status: true,
          }
        ]
      },
      {
        foto: 'url',
        nome: 'Alice Lima',
        valorMesada: 500.50,
        valorDescontos: 20.00,
        valorTotal: 285.00,
        atividades:[
          {
            descricao: 'guardar sapatos',
            valor: 15.00,
            status: false,
          }, 
          {
            descricao: 'arrumar a cama de novo',
            valor: 30.00,
            status: true,
          }
        ]
      }
    ];
  }

  onCardClick(): void{
    // this.membroEscolhido = membro;
  }
}