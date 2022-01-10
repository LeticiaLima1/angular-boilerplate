import { HttpErrorResponse } from '@angular/common/http';
import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogErroComponent } from 'src/app/componentes/dialog-erro/dialog-erro.component';
import { DialogSucessoComponent } from 'src/app/componentes/dialog-sucesso/dialog-sucesso.component';
import { Atividade } from 'src/app/models/atividade';
import { AtividadeService } from '../../atividades/atividade.service';

@Component({
  selector: 'app-dialog-gerenciar',
  templateUrl: 'dialog-gerenciar.component.html',
  styleUrls: ['./dialog-gerenciar.component.css']
})

export class DialogGerenciarComponent {

  titulo: string = 'Editar atividade';
  corpo: string = 'Altere os dados abaixo para editar uma atividade no RIOTT.';
  atividade: Atividade;
  
  
  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<DialogGerenciarComponent>,
    @Inject(MAT_DIALOG_DATA) public atividadeDialog: Atividade,
    private atividadeService: AtividadeService
    )
    {
    // this.atividade = atividadeDialog;
  }

  
  onNoClick(): void {
    this.dialogRef.close();
  }

  editarAtividade(): void{
      const formData = new FormData();
      formData.append('id', this.atividade.id);
      formData.append('description', this.atividade.description);
      this.atividadeService.editar(formData).subscribe(
        () => {
          this.dialogRef.close(true);
          this.openDialogSucesso('Atividade editada com sucesso!');
        },
        (httpErrorResponse: HttpErrorResponse) => {
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
