import { Component } from '@angular/core';
import { MembroLista } from 'src/app/models/membros';

@Component({
  selector: 'app-lista-membros',
  templateUrl: './lista-membros.component.html',
  styleUrls: ['./lista-membros.component.css'],
})

export class ListaMembrosComponent{

  listMembros: MembroLista[] = [
    {
      foto: 'url',
      nome: 'Ísis Lima',
      dataNascimento: '06/10/2017',
      valorMesada: 300.00,
    },
    {
      foto: 'url',
      nome: 'Alice Lima',
      dataNascimento: '04/04/2014',
      valorMesada: 500.50,
    }
  ]
 
}



