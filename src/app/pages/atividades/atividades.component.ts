import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Atividade } from 'src/app/models/atividade';
import { DialogCadastrarAtividadeComponent } from './dialog-cadastrar-atividade/dialog-cadastrar-atividade.component';

@Component({
  selector: 'app-atividades',
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent {

  constructor(private dialog: MatDialog) {}  

  listaAtividades: Atividade[] = [
    {
      descricao: 'Tirar lixo' ,
      
    },
    {
      descricao: 'Arrumar a cama' ,
      
    },
    {
      descricao: 'Guardar sapatos' ,
      
    }
  ];

  cadastrarAtividade(): void{
    this.openDialogCadastrarAtividade();

  }

  openDialogCadastrarAtividade(): void {
    this.dialog.open(DialogCadastrarAtividadeComponent, {
      width: '500px',
      height: '500px'
    });
  }
}

