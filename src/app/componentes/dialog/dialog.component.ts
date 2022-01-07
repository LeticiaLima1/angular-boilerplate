import {Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Membro } from 'src/app/models/membros';
import { MembrosService } from 'src/app/pages/membros.service';
import { DialogSucessoComponent } from '../dialog-sucesso/dialog-sucesso.component';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./dialog.component.css']

})

export class DialogComponent {

  corpo: string = 'Deseja realmente excluir esse membro?';
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
        }, 
        (error) => {
          this.openDialogSucesso('Não foi possível excluir o membro');
          console.log(error);
        }
      );

  }
  
  openDialogSucesso(texto: string): void {
    this.dialog.open(DialogSucessoComponent, {
      width: '250px',
      data: texto,
    });
  }
}
