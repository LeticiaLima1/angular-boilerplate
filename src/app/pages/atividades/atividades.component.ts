import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Atividade } from 'src/app/models/atividade';
import { DialogCadastrarAtividadeComponent } from './dialog-cadastrar-atividade/dialog-cadastrar-atividade.component';
import { DialogEditarAtividadeComponent } from './dialog-editar-atividade/dialog-editar-atividade.component';
import { DialogExcluirAtividadeComponent } from './dialog-excluir-atividade/dialog-excluir-atividade.component';

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

  openDialogExcluirAtividade(): void {
    this.dialog.open(DialogExcluirAtividadeComponent, {
      width: '300px',
    });
  }

  openDialogEditarAtividade(atividade: Atividade): void {
    this.dialog.open(DialogEditarAtividadeComponent, {
      width: '400px',
      height: '400px',
      data: atividade
    });
  }

}

