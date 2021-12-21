import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-sucesso',
  templateUrl: 'dialog-sucesso.component.html',
  styleUrls: ['./dialog-sucesso.component.css']

})

export class DialogSucessoComponent {

  corpo: string;

  constructor(public dialogRef: MatDialogRef<DialogSucessoComponent>, @Inject(MAT_DIALOG_DATA) public texto: string) {
    this.corpo = texto;
  }

  fechar(): void {
    this.dialogRef.close();
  }

}
