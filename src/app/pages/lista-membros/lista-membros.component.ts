import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCadastrarComponent } from 'src/app/componentes/dialog-cadastrar/dialog-cadastrar.component';
import { DialogEditarComponent } from 'src/app/componentes/dialog-editar/dialog-editar.component';
import { Membro, MembroLista } from 'src/app/models/membros';
import { DialogComponent } from '../../componentes/dialog/dialog.component';


const larguraDialogs = '250px';
@Component({
  selector: 'app-lista-membros',
  templateUrl: './lista-membros.component.html',
  styleUrls: ['./lista-membros.component.css'],
})

export class ListaMembrosComponent{

  constructor(public dialog: MatDialog) {}

  openDialog(membro: Membro): void {
    this.dialog.open(DialogComponent, {
      width: larguraDialogs,
      data: membro,
    });
  }

  openDialogEditar(membro: Membro): void {
    this.dialog.open(DialogEditarComponent, {
      width: larguraDialogs,
      data: membro,
    });
  }

  openDialogCadastrar(): void {
    this.dialog.open(DialogCadastrarComponent, {
      width: larguraDialogs,
    });
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
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



