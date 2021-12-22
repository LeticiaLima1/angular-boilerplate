import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCadastrarComponent } from 'src/app/componentes/dialog-cadastrar/dialog-cadastrar.component';
import { DialogEditarComponent } from 'src/app/componentes/dialog-editar/dialog-editar.component';
import { Membro } from 'src/app/models/membros';
import { DialogComponent } from '../../componentes/dialog/dialog.component';


const larguraDialogs = '250px';
@Component({
  selector: 'app-lista-membros',
  templateUrl: './lista-membros.component.html',
  styleUrls: ['./lista-membros.component.css'],
})

export class ListaMembrosComponent implements OnInit{

  listaMembros: Membro[];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.preencheListaMembros();
  }

  preencheListaMembros(): void {

    // this.listaMembros =  [
    //   {
    //     id: 'jyftyufmtyufy',
    //     postDate: new Date(),
    //     foto: 'url',
    //     nome: 'Ísis Lima',
    //     dataNascimento: new Date(),
    //     valorMesada: 300.00,
    //   },
    //   {
    //     id: 'resrserse ',
    //     postDate: new Date(),
    //     foto: 'url',
    //     nome: 'Alice Lima',
    //     dataNascimento: new Date(),
    //     valorMesada: 550.00,
    //   }
    // ];
    
  }

  // search() {
  //     this.heroesService
  //       .searchHeroes()
  //       .subscribe(heroes => (this.heroes = heroes));
    
  // }

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

  
}



