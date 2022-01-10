import { HttpErrorResponse } from '@angular/common/http';
import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogErroComponent } from 'src/app/componentes/dialog-erro/dialog-erro.component';
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
      }, (httpErrorResponse: HttpErrorResponse) => {
        let listError: string = 'Algo deu errado: ';
        console.log(httpErrorResponse);
        if(httpErrorResponse.error.error[0].msg){
          httpErrorResponse.error.error.forEach(erro => {
              console.log(erro.msg);
              listError = listError + erro.msg;
            });
        }else{
          listError = listError + httpErrorResponse.error.error;
        }
        this.openDialogErro(listError);
      });
}

openDialogSucesso(texto: string): void {
  this.dialog.open(DialogSucessoComponent, {
    width: '100%',
    data: texto,
  });
}

openDialogErro(texto: string): void {
  const dialogErro = this.dialog.open(DialogErroComponent, {
    width: '100%',
    data: texto,
  });
  dialogErro.afterClosed().subscribe(
    (result) => {
      if (!result){
        this.dialogRef.close(true);
      }
    } 
  );
}
}