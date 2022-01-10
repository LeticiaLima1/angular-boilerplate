import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ListasService } from './listas.service';
import { MembrosService } from '../membros.service';
import { MembroAPI, MembroValues } from 'src/app/models/membros';
import { Task } from 'src/app/models/listas-atividades';
import { DialogGerenciarComponent } from './dialog-gerenciar/dialog-gerenciar.component';

@Component({
  selector: 'app-listas-de-atividades',
  templateUrl: './listas-de-atividades.component.html',
  styleUrls: ['./listas-de-atividades.component.css']
})
export class ListasDeAtividadesComponent implements OnInit{

  membros: MembroAPI[];
  membrosValues: MembroValues[];
  tasks: Task[];

  constructor(
    private dialog: MatDialog, 
    private listasService: ListasService,
    private membroService: MembrosService) {} 

  ngOnInit(): void {
    this.buscarMembros();
  }

  buscarMembros(): void{
    this.membroService.buscarListaMembros().subscribe(
      (resposta) => {
        this.membrosValues = [];
        this.membros = [];
        resposta.data.forEach((membro) => {
          this.membros.push(membro);
        });

        this.membros.forEach((membro) =>{
          const membroValue = new MembroValues();
          membroValue.id = membro.id;
          membroValue.name = membro.name;
          membroValue.photo = 'http://localhost:4444/'+membro.photo;
          membroValue.birthdate = membro.birthdate;
          membroValue.allowance = membro.allowance;
          membroValue.desconto = 100;
          membroValue.total = membro.allowance - membroValue.desconto ;
          this.membrosValues.push(membroValue);
        });
        this.buscarListaAtividadesPorMembro(this.membrosValues[4]);
      },
      (erro) => {
        console.log(erro);
      }
    );
  }

  buscarListaAtividadesPorMembro(membroValues: MembroValues): void{
    this.listasService.buscarListaAtividadesPorMembroAtivas(membroValues).subscribe(
      (respota) => {
        this.tasks = [];
        respota.data.tasks.forEach( (task) =>{
          this.tasks.push(task);
        });
      },
      (erro) => {
        this.tasks = [];
        console.log(erro);
      }
    );
  }
  
  openDialogGerenciar(): void {
    this.dialog.open(DialogGerenciarComponent, {
      width: '100%',
    });
  }
}