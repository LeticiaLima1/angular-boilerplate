import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSucessoComponent } from 'src/app/componentes/dialog-sucesso/dialog-sucesso.component';
import { Atividade } from 'src/app/models/atividade';

@Component({
  selector: 'app-dialog-excluir-atividade',
  templateUrl: 'dialog-excluir-atividade.component.html',
  styleUrls: ['./dialog-excluir-atividade.component.css']

})

export class DialogExcluirAtividadeComponent {

  corpo: string = 'Deseja realmente essa atividade?';
  atividade: Atividade;

  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<DialogExcluirAtividadeComponent>,
    @Inject(MAT_DIALOG_DATA) public atividadeDialog: Atividade
    )
    {
    this.atividade = atividadeDialog;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluirAtividade(): void{
    // this.atividadeService.excluirAtividade(this.atividade.id);
    this.dialogRef.close();
    this.openDialogSucesso('Atividade excluída com sucesso!');
  }
  
  openDialogSucesso(texto: string): void {
    this.dialog.open(DialogSucessoComponent, {
      width: '250px',
      data: texto,
    });
  }
}
