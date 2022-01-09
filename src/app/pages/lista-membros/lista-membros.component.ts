import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogCadastrarComponent } from 'src/app/componentes/dialog-cadastrar/dialog-cadastrar.component';
import { DialogEditarComponent } from 'src/app/componentes/dialog-editar/dialog-editar.component';
import { Membro, MembroAPI, RespostaMembroAPI } from 'src/app/models/membros';
import { DialogComponent } from '../../componentes/dialog/dialog.component';
import { MembrosService } from '../membros.service';


const larguraDialogs = '100%';
@Component({
  selector: 'app-lista-membros',
  templateUrl: './lista-membros.component.html',
  styleUrls: ['./lista-membros.component.css'],
})

export class ListaMembrosComponent implements OnInit{

  respostaAPI: RespostaMembroAPI;
  membros: MembroAPI[] = [];

  constructor(public dialog: MatDialog, private membroService: MembrosService, public router: Router ) {}

  ngOnInit(): void {
    this.buscarLista();
  }

  buscarLista(): void{
    this.membroService.buscarListaMembros()
    .subscribe(
      (resposta: RespostaMembroAPI) => {
        this.membros = [];
        this.respostaAPI = resposta;
        resposta.data.forEach(membro => {
          membro.photo = 'http://localhost:4444/'+membro.photo;
          this.membros.push(membro);
        });
      },
      err => {
        console.log("Error", err);
      }
    );
  }
  
  openDialog(membro: MembroAPI): void {
    const dialog = this.dialog.open(DialogComponent, {
      width: larguraDialogs,
      data: membro,
    });
    dialog.afterClosed().subscribe(result => {
      if(result){
        this.buscarLista();
      }
    });
  }

  openDialogEditar(membro: Membro): void {
    const dialog = this.dialog.open(DialogEditarComponent, {
      width: larguraDialogs,
      data: membro,
    });
    dialog.afterClosed().subscribe(result => {
      if(result){
        this.buscarLista();
      }
    });
  }

  openDialogCadastrar(): void {
    const dialog = this.dialog.open(DialogCadastrarComponent, {
      width: larguraDialogs,
    });
    dialog.afterClosed().subscribe(result => {
      if(result){
        this.buscarLista();
      }
    });
  }
}



