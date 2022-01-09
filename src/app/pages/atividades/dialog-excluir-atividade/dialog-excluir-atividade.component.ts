import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSucessoComponent } from 'src/app/componentes/dialog-sucesso/dialog-sucesso.component';
import { Atividade } from 'src/app/models/atividade';
import { AtividadeService } from '../atividade.service';

@Component({
  selector: 'app-dialog-excluir-atividade',
  templateUrl: 'dialog-excluir-atividade.component.html',
  styleUrls: ['./dialog-excluir-atividade.component.css']

})

export class DialogExcluirAtividadeComponent {

  corpo: string = 'Deseja realmente excluir essa atividade?';
  atividade: Atividade;

  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<DialogExcluirAtividadeComponent>,
    public atividadeService: AtividadeService,
    @Inject(MAT_DIALOG_DATA) public atividadeDialog: Atividade
    )
    {
    this.atividade = atividadeDialog;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluirAtividade(): void{
    this.atividadeService.excluir(this.atividade.id).subscribe(
      () => {
        this.dialogRef.close(true);
        this.openDialogSucesso('Atividade excluída com sucesso!');
      },
      (erro) => {
        console.log(erro);
      }
    );
  }
  
  openDialogSucesso(texto: string): void {
    this.dialog.open(DialogSucessoComponent, {
      width: '100%',
      data: texto,
    });
  }
}
