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
  membroService: MembrosService;

  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public membroDialog: Membro) {
    this.membro = membroDialog;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  excluirMembro(): void{
    // this.membroService.excluiMembro(this.membro.nome);
    this.dialogRef.close();
    this.openDialogSucesso('Membro excluído com sucesso!');
  }
  
  openDialogSucesso(texto: string): void {
    this.dialog.open(DialogSucessoComponent, {
      width: '250px',
      data: texto,
    });
  }
}
