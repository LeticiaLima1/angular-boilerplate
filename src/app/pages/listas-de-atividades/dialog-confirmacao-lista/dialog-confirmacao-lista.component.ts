import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirmacao-lista',
  templateUrl: 'dialog-confirmacao-lista.component.html',
  styleUrls: ['./dialog-confirmacao-lista.component.css']
})

export class DialogConfirmacaoListaComponent {

  corpo: string;

  constructor(public dialogRef: MatDialogRef<DialogConfirmacaoListaComponent>, @Inject(MAT_DIALOG_DATA) public pergunta: string) {
    this.corpo = pergunta;
  }

  cancelar(): void{
    this.dialogRef.close(true);
  }

  fechar(): void {
    this.dialogRef.close(false);
  }

}
