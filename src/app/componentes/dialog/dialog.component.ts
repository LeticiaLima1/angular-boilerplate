import { HttpErrorResponse } from '@angular/common/http';
import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Membro } from 'src/app/models/membros';
import { MembrosService } from 'src/app/pages/membros.service';
import { DialogErroComponent } from '../dialog-erro/dialog-erro.component';
import { DialogSucessoComponent } from '../dialog-sucesso/dialog-sucesso.component';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./dialog.component.css']

})

export class DialogComponent {

  corpo: string = '';
  membro: Membro;

  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public membroDialog: Membro,
    public membroService: MembrosService
    ) {
    this.membro = membroDialog;
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

   excluirMembro(): void{
    this.membroService.excluiMembro(this.membro.id).subscribe(
        () => {
          this.dialogRef.close(true);
          this.openDialogSucesso('Membro excluído com sucesso!');
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


