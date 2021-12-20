import { Component } from '@angular/core';
import { Membros } from 'src/app/models/membros';

@Component({
  selector: 'app-lista-membros',
  templateUrl: './lista-membros.component.html',
  styleUrls: ['./lista-membros.component.css'],
})

export class ListaMembrosComponent{

  listMembros: Membros = [
    {
      id: '13412341234',
      postDate: new Date,
      nome: 'ísis lima Oliveira',
      dataNascimento: new Date(),
      valorMesada: 300.00,
    },
    {
      id: '4567456745',
      postDate: new Date,
      nome: 'Letícia Ferreira lima',
      dataNascimento: new Date(),
      valorMesada: 500.50,
    }
  ]
}



