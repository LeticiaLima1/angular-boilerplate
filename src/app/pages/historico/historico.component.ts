import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Atividade } from 'src/app/models/atividade';
// import { DialogCadastrarAtividadeComponent } from './dialog-cadastrar-atividade/dialog-cadastrar-atividade.component';
// import { DialogEditarAtividadeComponent } from './dialog-editar-atividade/dialog-editar-atividade.component';
// import { DialogExcluirAtividadeComponent } from './dialog-excluir-atividade/dialog-excluir-atividade.component';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent {

  constructor(private dialog: MatDialog) {}  

  // listaHistorico: Atividade[] = [
  //   {
  //     descricao: 'Tirar lixo' ,
      
  //   },
  //   {
  //     descricao: 'Arrumar a cama' ,
      
  //   },
  //   {
  //     descricao: 'Guardar sapatos' ,
      
  //   }
  // ];

  // cadastrarAtividade(): void{
  //   this.openDialogCadastrarAtividade();

  // }

  // openDialogCadastrarAtividade(): void {
  //   this.dialog.open(DialogCadastrarAtividadeComponent, {
  //     width: '100%',
  //   });
  // }

  // openDialogExcluirAtividade(): void {
  //   this.dialog.open(DialogExcluirAtividadeComponent, {
  //     width: '100%',
  //   });
  // }

  // openDialogEditarAtividade(atividade: Atividade): void {
  //   this.dialog.open(DialogEditarAtividadeComponent, {
  //     width: '100%',
  //     data: atividade
  //   });
  // }

}

